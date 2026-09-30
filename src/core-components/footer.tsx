import { NavLink } from "react-router"
import { Text } from "../components/text"

export function Footer() {
  return (
    <footer className="my-5 md:mt-8">
      <nav className="flex items-center justify-center gap-4">
        <NavLink to="/">
          <Text className="text-gray-300" variant="body-sm-bold">
            Tarefas
          </Text>
        </NavLink>
        <NavLink to="/components">
          <Text className="text-gray-300" variant="body-sm-bold">
            Componentes
          </Text>
        </NavLink>
      </nav>
    </footer>
  )
}
