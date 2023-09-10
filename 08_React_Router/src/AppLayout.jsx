import { Outlet } from "react-router-dom"
import {Header, Footer} from "./components"

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default AppLayout
