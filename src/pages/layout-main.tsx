import { NavLink, Outlet } from "react-router"
import { Container } from "../components/container"
import { Text } from "../components/text"

export function LayoutMain() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        Olá mundo - HEADER
      </Container>
      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>
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
    </>
  )
}
