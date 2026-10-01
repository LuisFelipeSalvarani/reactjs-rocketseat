import { useState } from "react"
import { delay } from "../helpers/utils"
import { TASKS_KEY, type Task, TaskState } from "../models/task"
import useLocalStorage from "./use-local-storage"

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, [])
  const [isUpdatingTask, setIsUpdatingTask] = useState(false)
  const [isDeletingTask, setIsDeletingTask] = useState(false)

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

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true)

    await delay(100)

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task
      )
    )
    setIsUpdatingTask(false)
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    )
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true)

    await delay(100)

    setTasks(tasks.filter((task) => task.id !== id))
    setIsDeletingTask(false)
  }

  return {
    deleteTask,
    isDeletingTask,
    isUpdatingTask,
    prepareTask,
    updateTask,
    updateTaskStatus,
  }
}
