import { TASKS_KEY, type Task, TaskState } from "../models/task"
import useLocalStorage from "./use-local-storage"

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        state: TaskState.Creating,
        title: "",
      },
    ])
  }

  return {
    prepareTask,
  }
}
