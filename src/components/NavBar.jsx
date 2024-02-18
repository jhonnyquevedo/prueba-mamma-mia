import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

function NavBar() {

  const{ total }=useContext(PizzaContext);
  
 //  componente NavLink junto con el atributo isActive nos ayudan a saber cuál de las opciones de navegación corresponde a la ruta consultada.
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <>
      <nav>
        <div>
          <NavLink className={`base ${setActiveClass}`} to="/"><h2>🍕 Pizzería Mamma Mía!</h2></NavLink>
        </div>

        <div>
          <NavLink className={`base ${setActiveClass}`} to="/carrito"><h3>🛒${total}</h3></NavLink>
        </div>
      </nav>
    </>
  )
}

export default NavBar