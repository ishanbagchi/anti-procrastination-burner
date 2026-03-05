import React from 'react'
import { Button } from 'ayna-ui'
import { Task } from '../types/task'
import * as S from './TaskCard.styled'

interface TaskCardProps {
	task: Task
	onComplete?: (taskId: string) => void
	onDelete?: (taskId: string) => void
	onBurn?: (taskId: string) => void
	showActions?: boolean
}

export const TaskCard: React.FC<TaskCardProps> = ({
	task,
	onComplete,
	onDelete,
	onBurn,
	showActions = true,
}) => {
	const isBurned = task.status === 'burned'
	const isCompleted = task.status === 'completed'
	const isBurning = task.burnProgress > 75 && task.status === 'active'

	const getTimeRemaining = () => {
		if (isBurned || isCompleted) return null

		const now = Date.now()
		const remaining = task.deadline - now

		if (remaining <= 0) return '🔥 BURNING!'

		const minutes = Math.floor(remaining / 60000)
		const seconds = Math.floor((remaining % 60000) / 1000)

		if (minutes === 0) {
			return `${seconds}s left`
		}

		return `${minutes}m ${seconds}s left`
	}

	const formatCreatedDate = () => {
		const date = new Date(task.createdAt)
		return date.toLocaleString('en-US', {
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		})
	}

	return (
		<S.TaskCardContainer $isBurning={isBurning} $isBurned={isBurned}>
			<S.TaskHeader>
				<S.TaskTitle $isBurned={isBurned}>{task.title}</S.TaskTitle>
				{isBurned && <S.BurnedBadge>🔥 BURNED</S.BurnedBadge>}
				{isCompleted && <S.CompletedBadge>✓ DONE</S.CompletedBadge>}
			</S.TaskHeader>

			{task.description && (
				<S.TaskDescription $isBurned={isBurned}>
					{task.description}
				</S.TaskDescription>
			)}

			{task.status === 'active' && (
				<>
					<S.FuseContainer>
						<S.FuseProgress
							$progress={task.burnProgress}
							$isBurning={isBurning}
						/>
					</S.FuseContainer>

					<S.TimeInfo>
						<span>Created: {formatCreatedDate()}</span>
						<S.TimeLabel $isUrgent={task.burnProgress > 75}>
							{getTimeRemaining()}
						</S.TimeLabel>
					</S.TimeInfo>
				</>
			)}

			{!task.status.match(/burned|completed/) && (
				<S.TimeInfo>
					<span>Created: {formatCreatedDate()}</span>
					<span>{task.timeframeMinutes} min timeframe</span>
				</S.TimeInfo>
			)}

			{showActions && task.status === 'active' && (
				<S.ButtonGroup>
					<Button
						variant="success"
						size="small"
						onClick={() => onComplete?.(task.id)}
					>
						✓ Complete
					</Button>
					<Button
						variant="danger"
						size="small"
						onClick={() => onDelete?.(task.id)}
					>
						🗑️ Delete into Abyss
					</Button>
					<Button
						variant="outline"
						size="small"
						onClick={() => onBurn?.(task.id)}
					>
						🔥 Burn Now
					</Button>
				</S.ButtonGroup>
			)}
		</S.TaskCardContainer>
	)
}
