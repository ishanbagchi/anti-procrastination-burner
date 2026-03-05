import { useState } from 'react'
import { Modal, Button, Alert } from 'ayna-ui'
import { useTasks } from './hooks/useTasks'
import { TaskCard } from './components/TaskCard'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskFormData } from './types/task'
import * as S from './App.styled'

type TabType = 'active' | 'graveyard'

function App() {
	const [activeTab, setActiveTab] = useState<TabType>('active')
	const [alert, setAlert] = useState<{
		title: string
		message: string
		variant: 'info' | 'success' | 'warning' | 'danger'
	} | null>(null)
	const [confirmModal, setConfirmModal] = useState<{
		title: string
		message: string
		onConfirm: () => void
		confirmText: string
		variant: 'danger' | 'primary'
	} | null>(null)

	const {
		activeTasks,
		graveyardTasks,
		canAddTask,
		maxTasks,
		addTask,
		completeTask,
		deleteTask,
		burnTask,
		clearGraveyard,
	} = useTasks()

	const handleAddTask = (data: TaskFormData) => {
		const result = addTask(data)

		if (result.success) {
			setAlert({
				title: 'Success!',
				message: '🔥 Task added! The fuse is lit!',
				variant: 'success',
			})
			setTimeout(() => setAlert(null), 4000)
		} else {
			setAlert({
				title: 'Error',
				message: result.message || 'Failed to add task',
				variant: 'danger',
			})
			setTimeout(() => setAlert(null), 4000)
		}
	}

	const handleComplete = (taskId: string) => {
		completeTask(taskId)
		setAlert({
			title: 'Task Completed!',
			message:
				'✓ Great work! Your task has been completed and moved to the graveyard.',
			variant: 'success',
		})
		setTimeout(() => setAlert(null), 4000)
	}

	const handleDelete = (taskId: string) => {
		setConfirmModal({
			title: 'Delete Task?',
			message:
				'Delete this task into the abyss? This action cannot be undone.',
			variant: 'danger',
			confirmText: 'Delete Forever',
			onConfirm: () => {
				deleteTask(taskId)
				setConfirmModal(null)
				setAlert({
					title: 'Task Deleted',
					message: '🗑️ Task deleted into the void... Forever gone.',
					variant: 'warning',
				})
				setTimeout(() => setAlert(null), 4000)
			},
		})
	}

	const handleBurn = (taskId: string) => {
		setConfirmModal({
			title: 'Burn Task Now?',
			message:
				'🔥 Burn this task immediately? It will be moved to the graveyard and marked as burned.',
			variant: 'danger',
			confirmText: 'Burn It',
			onConfirm: () => {
				burnTask(taskId)
				setConfirmModal(null)
				setAlert({
					title: 'Task Burned!',
					message:
						'🔥 The task has been burned and moved to the graveyard.',
					variant: 'danger',
				})
				setTimeout(() => setAlert(null), 4000)
			},
		})
	}

	const handleClearGraveyard = () => {
		setConfirmModal({
			title: 'Clear Graveyard?',
			message:
				'🪦 Clear the entire graveyard? All completed and burned tasks will be permanently removed. This action cannot be undone.',
			variant: 'primary',
			confirmText: 'Clear All',
			onConfirm: () => {
				clearGraveyard()
				setConfirmModal(null)
				setAlert({
					title: 'Graveyard Cleared',
					message:
						'🪦 All completed and burned tasks have been permanently removed.',
					variant: 'info',
				})
				setTimeout(() => setAlert(null), 4000)
			},
		})
	}

	const completedCount = graveyardTasks.filter(
		(t) => t.status === 'completed',
	).length
	const burnedCount = graveyardTasks.filter(
		(t) => t.status === 'burned',
	).length

	return (
		<S.AppContainer>
			<S.Header>
				<S.Title>🔥 Anti-Procrastination Burner</S.Title>
				<S.Subtitle>
					Maximum {maxTasks} tasks. Complete them or watch them burn.
				</S.Subtitle>
			</S.Header>

			<S.Content>
				{/* Notification Alert */}
				{alert && (
					<div style={{ marginBottom: '20px' }}>
						<Alert
							variant={alert.variant}
							title={alert.title}
							onClose={() => setAlert(null)}
						>
							{alert.message}
						</Alert>
					</div>
				)}

				{/* Confirmation Modal */}
				<Modal
					isOpen={confirmModal !== null}
					onClose={() => setConfirmModal(null)}
					title={confirmModal?.title}
					footer={
						<div
							style={{
								display: 'flex',
								gap: '12px',
								justifyContent: 'flex-end',
							}}
						>
							<Button
								variant="secondary"
								onClick={() => setConfirmModal(null)}
							>
								Cancel
							</Button>
							<Button
								variant={confirmModal?.variant}
								onClick={() => {
									confirmModal?.onConfirm()
								}}
							>
								{confirmModal?.confirmText}
							</Button>
						</div>
					}
				>
					{confirmModal?.message}
				</Modal>

				<S.Stats>
					<S.StatItem>
						<S.StatValue>
							{activeTasks.length}/{maxTasks}
						</S.StatValue>
						<S.StatLabel>Active Tasks</S.StatLabel>
					</S.StatItem>
					<S.StatItem>
						<S.StatValue>{completedCount}</S.StatValue>
						<S.StatLabel>Completed</S.StatLabel>
					</S.StatItem>
					<S.StatItem>
						<S.StatValue>{burnedCount}</S.StatValue>
						<S.StatLabel>Burned</S.StatLabel>
					</S.StatItem>
				</S.Stats>

				<S.TabContainer>
					<S.Tab
						$active={activeTab === 'active'}
						onClick={() => setActiveTab('active')}
					>
						🔥 Active ({activeTasks.length})
					</S.Tab>
					<S.Tab
						$active={activeTab === 'graveyard'}
						onClick={() => setActiveTab('graveyard')}
					>
						🪦 Graveyard ({graveyardTasks.length})
					</S.Tab>
				</S.TabContainer>

				{activeTab === 'active' ? (
					<>
						<S.TaskSection>
							<AddTaskForm
								onSubmit={handleAddTask}
								canAdd={canAddTask}
								maxTasks={maxTasks}
							/>
						</S.TaskSection>

						<S.TaskSection>
							{activeTasks.length > 0 ? (
								activeTasks.map((task) => (
									<TaskCard
										key={task.id}
										task={task}
										onComplete={handleComplete}
										onDelete={handleDelete}
										onBurn={handleBurn}
									/>
								))
							) : (
								<S.EmptyState>
									<S.EmptyStateIcon>✨</S.EmptyStateIcon>
									<S.EmptyStateText>
										No active tasks. Add one above to light
										the fuse!
									</S.EmptyStateText>
								</S.EmptyState>
							)}
						</S.TaskSection>
					</>
				) : (
					<S.TaskSection>
						{graveyardTasks.length > 0 ? (
							<>
								{graveyardTasks.map((task) => (
									<TaskCard
										key={task.id}
										task={task}
										showActions={false}
									/>
								))}
								<S.ClearButton onClick={handleClearGraveyard}>
									🧹 Clear Graveyard
								</S.ClearButton>
							</>
						) : (
							<S.EmptyState>
								<S.EmptyStateIcon>🪦</S.EmptyStateIcon>
								<S.EmptyStateText>
									The graveyard is empty. Completed and burned
									tasks will appear here.
								</S.EmptyStateText>
							</S.EmptyState>
						)}
					</S.TaskSection>
				)}
			</S.Content>
		</S.AppContainer>
	)
}

export default App
