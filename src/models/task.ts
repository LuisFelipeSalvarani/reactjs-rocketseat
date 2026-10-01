export const TASKS_KEY = "tasks"

export enum TaskState {
  Creating = "creating",
  Created = "created",
}

export interface Task {
  concluded?: boolean
  id: string
  state?: TaskState
  title: string
}
