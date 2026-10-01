import { cx } from "class-variance-authority"
import { type ChangeEvent, type SyntheticEvent, useState } from "react"
import CheckIcon from "../assets/icons/check.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import XIcon from "../assets/icons/x.svg?react"
import { ButtonIcon } from "../components/button-icon"
import { Card } from "../components/card"
import { InputCheckbox } from "../components/input-checkbox"
import { InputText } from "../components/input-text"
import { Text } from "../components/text"
import { useTask } from "../hooks/use-task"
import { type Task, TaskState } from "../models/task"

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)
  const [taskTitle, setTaskTitle] = useState(task?.title || "")
  const { updateTask, updateTaskStatus } = useTask()

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }

  function handleSaveTask(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()

    updateTask(task.id, { title: taskTitle })
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const { checked } = e.target

    updateTaskStatus(task.id, checked)
  }

  return (
    <Card size="md">
      {isEditing ? (
        <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
          <InputText
            autoFocus
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            value={taskTitle}
          />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              onClick={handleExitEditTask}
              type="button"
              variant="secondary"
            />
            <ButtonIcon icon={CheckIcon} type="submit" variant="primary" />
          </div>
        </form>
      ) : (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              onClick={handleEditTask}
              variant="tertiary"
            />
          </div>
        </div>
      )}
    </Card>
  )
}
