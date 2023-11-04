// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

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