import { useState, useEffect, useCallback } from 'react'
import { Task, TaskFormData } from '../types/task'

const STORAGE_KEY = 'anti-procrastination-tasks'
const MAX_ACTIVE_TASKS = 3

export const useTasks = () => {
	const [tasks, setTasks] = useState<Task[]>(() => {
		const saved = localStorage.getItem(STORAGE_KEY)
		return saved ? JSON.parse(saved) : []
	})

	// Save to localStorage whenever tasks change
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
	}, [tasks])

	// Check for burned tasks every second
	useEffect(() => {
		const interval = setInterval(() => {
			const now = Date.now()
			setTasks((prevTasks) =>
				prevTasks.map((task) => {
					if (task.status === 'active' && now >= task.deadline) {
						return {
							...task,
							status: 'burned' as const,
							burnProgress: 100,
						}
					}
					if (task.status === 'active') {
						const elapsed = now - task.createdAt
						const total = task.deadline - task.createdAt
						const progress = Math.min(100, (elapsed / total) * 100)
						return { ...task, burnProgress: progress }
					}
					return task
				}),
			)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const activeTasks = tasks.filter((t) => t.status === 'active')
	const completedTasks = tasks.filter((t) => t.status === 'completed')
	const burnedTasks = tasks.filter((t) => t.status === 'burned')
	const graveyardTasks = [...completedTasks, ...burnedTasks].sort(
		(a, b) => b.createdAt - a.createdAt,
	)

	const canAddTask = activeTasks.length < MAX_ACTIVE_TASKS

	const addTask = useCallback(
		(formData: TaskFormData): { success: boolean; message?: string } => {
			if (activeTasks.length >= MAX_ACTIVE_TASKS) {
				return {
					success: false,
					message: `You can only have ${MAX_ACTIVE_TASKS} active tasks. Complete or delete one first!`,
				}
			}

			const now = Date.now()
			const newTask: Task = {
				id: `task-${now}-${Math.random().toString(36).substr(2, 9)}`,
				title: formData.title,
				description: formData.description,
				createdAt: now,
				deadline: now + formData.timeframeMinutes * 60 * 1000,
				timeframeMinutes: formData.timeframeMinutes,
				status: 'active',
				burnProgress: 0,
			}

			setTasks((prev) => [...prev, newTask])
			return { success: true }
		},
		[activeTasks.length],
	)

	const completeTask = useCallback((taskId: string) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === taskId
					? { ...task, status: 'completed' as const, burnProgress: 0 }
					: task,
			),
		)
	}, [])

	const deleteTask = useCallback((taskId: string) => {
		setTasks((prev) => prev.filter((task) => task.id !== taskId))
	}, [])

	const burnTask = useCallback((taskId: string) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === taskId
					? { ...task, status: 'burned' as const, burnProgress: 100 }
					: task,
			),
		)
	}, [])

	const clearGraveyard = useCallback(() => {
		setTasks((prev) => prev.filter((task) => task.status === 'active'))
	}, [])

	return {
		tasks,
		activeTasks,
		graveyardTasks,
		canAddTask,
		maxTasks: MAX_ACTIVE_TASKS,
		addTask,
		completeTask,
		deleteTask,
		burnTask,
		clearGraveyard,
	}
}
