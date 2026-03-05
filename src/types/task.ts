export interface Task {
	id: string
	title: string
	description?: string
	createdAt: number
	deadline: number // timestamp when task should burn
	timeframeMinutes: number // how many minutes user assigned for this task
	status: 'active' | 'completed' | 'burned'
	burnProgress: number // 0-100, how much of the fuse is burned
}

export interface TaskFormData {
	title: string
	description?: string
	timeframeMinutes: number
}
