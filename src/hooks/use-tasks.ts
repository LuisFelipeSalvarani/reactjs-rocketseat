import { TASKS_KEY, type Task, TaskState } from "../models/task"
import useLocalStorage from "./use-local-storage"

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  return {
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    tasks,
  }
}
