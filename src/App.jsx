import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import NotFound from "./NotFound"
import Historial from "./Historial"
import './style.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" Component={Inicio} />

          <Route path="/historial" Component={Historial} />

          <Route path="*" Component={NotFound} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;