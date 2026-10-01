import { useEffect, useState } from "react"
import { delay } from "../helpers/utils"
import { TASKS_KEY, type Task, TaskState } from "../models/task"
import useLocalStorage from "./use-local-storage"

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [tasks, setTasks] = useState<Task[]>([])
  const [isLoadingTasks, setIsLoadingTasks] = useState(true)

  async function fetchTasks() {
    if (isLoadingTasks) {
      console.time("Carregando tarefas...")
      await delay(2000)
      setIsLoadingTasks(false)
      console.timeEnd("Carregando tarefas...")
    }

    setTasks(tasksData)
  }

  useEffect(() => {
    fetchTasks()
  }, [tasksData])

  return {
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
      .length,
    isLoadingTasks,
    tasks,
  }
}
