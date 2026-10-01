import { cx } from "class-variance-authority"
import { useState } from "react"
import CheckIcon from "../assets/icons/check.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import TrashIcon from "../assets/icons/trash.svg?react"
import XIcon from "../assets/icons/x.svg?react"
import { ButtonIcon } from "../components/button-icon"
import { Card } from "../components/card"
import { InputCheckbox } from "../components/input-checkbox"
import { InputText } from "../components/input-text"
import { Text } from "../components/text"
import { type Task, TaskState } from "../models/task"

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)

  function handleEditTask() {
    setIsEditing(true)
  }

  function handleExitEditTask() {
    setIsEditing(false)
  }

  return (
    <Card className="flex items-center gap-4" size="md">
      {isEditing ? (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              onClick={handleExitEditTask}
              variant="secondary"
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      ) : (
        <>
          <InputCheckbox
            checked={task?.concluded}
            value={task?.concluded?.toString()}
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
        </>
      )}
    </Card>
  )
}
