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

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false)

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
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
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
