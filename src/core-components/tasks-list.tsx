import PlusIcon from "../assets/icons/plus.svg?react"
import { Button } from "../components/button"
import { useTask } from "../hooks/use-task"
import { useTasks } from "../hooks/use-tasks"
import { type Task, TaskState } from "../models/task"
import { TaskItem } from "./task-item"

export function TasksList() {
  const { tasks, isLoadingTasks } = useTasks()
  const { prepareTask } = useTask()

  console.log(tasks)

  function handleNewTask() {
    prepareTask()
  }

  return (
    <>
      <section>
        <Button
          className="w-full"
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
          icon={PlusIcon}
          onClick={handleNewTask}
        >
          Nova Tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => <TaskItem key={task.id} task={task} />)}
        {!!isLoadingTasks && (
          <>
            <TaskItem loading={isLoadingTasks} task={{} as Task} />
            <TaskItem loading={isLoadingTasks} task={{} as Task} />
            <TaskItem loading={isLoadingTasks} task={{} as Task} />
          </>
        )}
      </section>
    </>
  )
}
