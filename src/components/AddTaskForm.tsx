import React, { useState } from 'react'
import { Button, Input, Select } from 'ayna-ui'
import * as S from './AddTaskForm.styled'
import { TaskFormData } from '../types/task'

interface AddTaskFormProps {
	onSubmit: (data: TaskFormData) => void
	canAdd: boolean
	maxTasks: number
}

const TIMEFRAME_OPTIONS = [
	{ value: '5', label: '5 minutes' },
	{ value: '10', label: '10 minutes' },
	{ value: '15', label: '15 minutes' },
	{ value: '30', label: '30 minutes' },
	{ value: '60', label: '1 hour' },
	{ value: '120', label: '2 hours' },
	{ value: '240', label: '4 hours' },
	{ value: '480', label: '8 hours' },
]

export const AddTaskForm: React.FC<AddTaskFormProps> = ({
	onSubmit,
	canAdd,
	maxTasks,
}) => {
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [timeframe, setTimeframe] = useState('30')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		if (!title.trim()) return

		onSubmit({
			title: title.trim(),
			description: description.trim() || undefined,
			timeframeMinutes: parseInt(timeframe, 10),
		})

		setTitle('')
		setDescription('')
		setTimeframe('30')
	}

	return (
		<S.FormContainer onSubmit={handleSubmit}>
			<S.FormTitle>Add New Task</S.FormTitle>

			{!canAdd && (
				<S.WarningBox>
					⚠️ You've hit the {maxTasks}-task limit! Complete or delete
					a task first.
				</S.WarningBox>
			)}

			<S.FormGroup>
				<S.Label>Task Title *</S.Label>
				<Input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="What needs to be done?"
					fullWidth
					disabled={!canAdd}
					autoFocus
					maxLength={100}
				/>
			</S.FormGroup>

			<S.FormGroup>
				<S.Label>Description (optional)</S.Label>
				<S.Textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Add more details..."
					disabled={!canAdd}
					maxLength={300}
					rows={3}
				/>
			</S.FormGroup>

			<S.FormGroup>
				<S.Label>Timeframe (before it burns) *</S.Label>
				<Select
					value={timeframe}
					onChange={(value) => setTimeframe(value)}
					options={TIMEFRAME_OPTIONS}
					disabled={!canAdd}
					fullWidth
				/>
			</S.FormGroup>

			<Button
				type="submit"
				variant="primary"
				size="medium"
				disabled={!canAdd || !title.trim()}
			>
				🔥 Light the Fuse
			</Button>
		</S.FormContainer>
	)
}
