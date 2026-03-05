import { useState } from 'react'
import { Modal, Button, Toast, Checkbox, Avatar } from 'ayna-ui'
import { useTasks } from './hooks/useTasks'
import { TaskCard } from './components/TaskCard'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskFormData } from './types/task'
import * as S from './App.styled'

type TabType = 'active' | 'graveyard'

function App() {
	const [activeTab, setActiveTab] = useState<TabType>('active')
	const [showCompleted, setShowCompleted] = useState(true)
	const [showBurned, setShowBurned] = useState(true)
	const [showHelp, setShowHelp] = useState(false)
	const [toast, setToast] = useState<{
		message: string
		variant: 'info' | 'success' | 'warning' | 'error'
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
			setToast({
				message: '🔥 Task added! The fuse is lit!',
				variant: 'success',
			})
			setTimeout(() => setToast(null), 4000)
		} else {
			setToast({
				message: result.message || 'Failed to add task',
				variant: 'error',
			})
			setTimeout(() => setToast(null), 4000)
		}
	}

	const handleComplete = (taskId: string) => {
		completeTask(taskId)
		setToast({
			message:
				'✓ Great work! Your task has been completed and moved to the graveyard.',
			variant: 'success',
		})
		setTimeout(() => setToast(null), 4000)
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
				setToast({
					message: '🗑️ Task deleted into the void... Forever gone.',
					variant: 'warning',
				})
				setTimeout(() => setToast(null), 4000)
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
				setToast({
					message:
						'🔥 The task has been burned and moved to the graveyard.',
					variant: 'error',
				})
				setTimeout(() => setToast(null), 4000)
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
				setToast({
					message:
						'🪦 All completed and burned tasks have been permanently removed.',
					variant: 'info',
				})
				setTimeout(() => setToast(null), 4000)
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
				<S.AvatarContainer>
					<a
						href="https://ishanbagchi.com"
						target="_blank"
						rel="noopener noreferrer"
						title="Visit Ishan Bagchi's website"
					>
						<Avatar name="Ishan Bagchi" size="large" />
					</a>
				</S.AvatarContainer>

				<S.HeaderBadge>⚡ Productivity Tool</S.HeaderBadge>

				<S.TitleContainer>
					<S.TitleWrapper>
						<S.TitleIcon>🔥</S.TitleIcon>
						<S.Title>The Fuse</S.Title>
					</S.TitleWrapper>
					<S.HelpButton onClick={() => setShowHelp(true)}>
						❓ Help
					</S.HelpButton>
				</S.TitleContainer>

				<S.SubtitleWrapper>
					<S.Subtitle>
						Only {maxTasks} tasks allowed. Complete them or watch
						them burn.
					</S.Subtitle>
					<S.Tagline>
						⏱️ Time pressure meets artificial scarcity — the
						ultimate productivity hack
					</S.Tagline>
				</S.SubtitleWrapper>
			</S.Header>

			<S.Content>
				{/* Help Modal */}
				<Modal
					isOpen={showHelp}
					onClose={() => setShowHelp(false)}
					title="How It Works"
					size="large"
				>
					<S.HelpContent>
						<S.HelpSection>
							<S.HelpTitle>🎯 The Core Mechanic</S.HelpTitle>
							<S.HelpText>
								This app uses <strong>scarcity</strong> to force
								prioritization. You can only have{' '}
								<strong>3 active tasks</strong> at any time.
								This limitation makes each task slot precious,
								forcing you to focus on what truly matters.
							</S.HelpText>
						</S.HelpSection>

						<S.HelpSection>
							<S.HelpTitle>🔥 The Burn Mechanic</S.HelpTitle>
							<S.HelpText>
								Every task has a <strong>fuse</strong> - a
								timeframe you set when creating it (5 minutes to
								8 hours). If you don't complete the task before
								time runs out, it{' '}
								<strong>burns automatically</strong> and moves
								to the graveyard.
							</S.HelpText>
							<S.HelpList>
								<li>
									<strong>Yellow fuse:</strong> Still safe
									(0-50% burned)
								</li>
								<li>
									<strong>Orange fuse:</strong> Getting urgent
									(50-75%)
								</li>
								<li>
									<strong>Red fuse:</strong> Critical!
									(75-100%)
								</li>
							</S.HelpList>
						</S.HelpSection>

						<S.HelpSection>
							<S.HelpTitle>✨ How to Use</S.HelpTitle>
							<S.HelpList>
								<li>
									<strong>Add a task:</strong> Fill in the
									title, optional description, and choose a
									timeframe. Click "🔥 Light the Fuse"
								</li>
								<li>
									<strong>Complete it:</strong> Click the ✓
									Complete button when done
								</li>
								<li>
									<strong>Delete it:</strong> Remove tasks you
									no longer need with 🗑️ Delete
								</li>
								<li>
									<strong>Burn it manually:</strong> Give up
									on a task early with 🔥 Burn Now
								</li>
							</S.HelpList>
						</S.HelpSection>

						<S.HelpSection>
							<S.HelpTitle>🪦 The Graveyard</S.HelpTitle>
							<S.HelpText>
								All completed and burned tasks end up here. Use
								it to:
							</S.HelpText>
							<S.HelpList>
								<li>
									<strong>Track progress:</strong> See your
									completion rate
								</li>
								<li>
									<strong>Learn patterns:</strong> Notice
									which tasks you complete vs. which burn
								</li>
								<li>
									<strong>Filter view:</strong> Use checkboxes
									to show/hide completed or burned tasks
								</li>
								<li>
									<strong>Clear history:</strong> Start fresh
									with the "🧹 Clear Graveyard" button
								</li>
							</S.HelpList>
						</S.HelpSection>

						<S.HelpSection>
							<S.HelpTitle>💡 Pro Tips</S.HelpTitle>
							<S.HelpList>
								<li>
									Choose realistic timeframes - better to
									succeed than burn
								</li>
								<li>
									Use the 3-task limit wisely - only add what
									you'll actually do
								</li>
								<li>
									Watch the live timer and fuse color for
									urgency cues
								</li>
								<li>
									Review the graveyard periodically to improve
									your planning
								</li>
								<li>
									Your tasks auto-save to localStorage - they
									persist across sessions
								</li>
							</S.HelpList>
						</S.HelpSection>

						<S.HelpSection>
							<S.HelpTitle>🧠 The Psychology</S.HelpTitle>
							<S.HelpText>
								This app fights procrastination through{' '}
								<strong>artificial scarcity</strong> and{' '}
								<strong>time pressure</strong>. The 3-task limit
								prevents overwhelm. The burning mechanic creates
								urgency. Together, they push you to act instead
								of endlessly planning.
							</S.HelpText>
						</S.HelpSection>
					</S.HelpContent>
				</Modal>

				{/* Toast Notification */}
				<div
					style={{
						position: 'fixed',
						top: 10,
						left: 10,
						zIndex: 9999,
					}}
				>
					{toast && (
						<Toast
							message={toast.message}
							variant={toast.variant}
							isVisible={true}
							onClose={() => setToast(null)}
							duration={4000}
							position="top-left"
						/>
					)}
				</div>

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
								<S.FilterContainer>
									<S.FilterLabel>Show:</S.FilterLabel>
									<S.CheckboxGroup>
										<S.CheckboxLabel>
											<Checkbox
												checked={showCompleted}
												onChange={(e) =>
													setShowCompleted(
														e.target.checked,
													)
												}
											/>
											<span>
												✓ Completed ({completedCount})
											</span>
										</S.CheckboxLabel>
										<S.CheckboxLabel>
											<Checkbox
												checked={showBurned}
												onChange={(e) =>
													setShowBurned(
														e.target.checked,
													)
												}
											/>
											<span>
												🔥 Burned ({burnedCount})
											</span>
										</S.CheckboxLabel>
									</S.CheckboxGroup>
								</S.FilterContainer>
								{graveyardTasks
									.filter(
										(task) =>
											(task.status === 'completed' &&
												showCompleted) ||
											(task.status === 'burned' &&
												showBurned),
									)
									.map((task) => (
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
