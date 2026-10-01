import PlusIcon from "../assets/icons/plus.svg?react"
import { Button } from "../components/button"
import { useTasks } from "../hooks/use-tasks"
import { TaskItem } from "./task-item"

export function TasksList() {
  const { tasks } = useTasks()

  console.log(tasks)

  return (
    <>
      <section>
        <Button className="w-full" icon={PlusIcon}>
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  )
}
