import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import RouteController from "./routes/RouteController"
import Minifooter from "./Components/Minifooter"
import { useLocation } from "react-router-dom"

function App() {
  
  const {pathname} = useLocation()

  return (
    <>
      {pathname !=='/login' && <Nav/>}
      <RouteController/>
      {pathname ==='/' && <Footer/>}
      {pathname !=='/' && <Minifooter/>}
    </>
  )
}

export default App
