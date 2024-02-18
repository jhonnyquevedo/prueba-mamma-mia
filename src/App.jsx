import NavBar from './components/NavBar'
import Home from './views/Home'
import { Route, Routes } from "react-router-dom";
import Pizza from './views/Pizza';
import Carrito from './views/Carrito';
//Se importa la vista NotFound para agregar la ruta por defecto 
import NotFound from "./views/NotFound";
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Se define en el path de la ruta el reconocimiento del parámetro :id */}
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
