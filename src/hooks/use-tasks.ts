import { TASKS_KEY, type Task } from "../models/task"
import useLocalStorage from "./use-local-storage"

export function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  return {
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    tasks,
    tasksCount: tasks.length,
  }
}
