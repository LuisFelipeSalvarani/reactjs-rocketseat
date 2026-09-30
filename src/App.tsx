import CheckIcon from "./assets/icons/check.svg?react"
import PencilIcon from "./assets/icons/pencil.svg?react"
import PlusIcon from "./assets/icons/plus.svg?react"
import SpinnerIcon from "./assets/icons/spinner.svg?react"
import TrashIcon from "./assets/icons/trash.svg?react"
import XIcon from "./assets/icons/x.svg?react"
import { Badge } from "./components/badge"
import { Button } from "./components/button"
import { ButtonIcon } from "./components/button-icon"
import { Icon } from "./components/icon"
import { InputText } from "./components/input-text"
import { Text } from "./components/text"

export function App() {
  return (
    <div className="grid gap-10">
      <div className="flex flex-col gap-2">
        <Text className="text-pink-base" variant="body-sm-bold">
          Olá mundo!
        </Text>
        <Text className="text-green-base">Olá mundo!</Text>
        <Text variant="body-md-bold">Olá mundo!</Text>
      </div>

      <div className="flex gap-1">
        <Icon className="fill-green-base" svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={PlusIcon} />
        <Icon animate svg={SpinnerIcon} />
        <Icon svg={XIcon} />
      </div>

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={XIcon}>Nova Tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>
    </div>
  )
}
