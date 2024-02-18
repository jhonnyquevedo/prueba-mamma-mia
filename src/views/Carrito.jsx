import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

export default function Carrito() {
  const { pizzas, sumar, restar, total } = useContext(PizzaContext);

  const filtrarPizzas = pizzas.filter((element) => element.cantidad > 0)

  return (
    <div className="d-flex justify-content-center">
      <div className="m-3 border p-4" style={{ width: "80vw" }}>
        <div>Detalles del Pedido</div>
        {filtrarPizzas?.map((pizzaFilter) => (
          <div key={pizzaFilter.id}>
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex gap-2 justify-content-start align-items-center">
                <img src={pizzaFilter.img} alt="" style={{ width: "100px" }} />
                <p className="m-0">{pizzaFilter.name}</p>
              </div>
              <div className="d-flex">
                <p>$ {pizzaFilter.price.toLocaleString('es-ES') * pizzaFilter.cantidad.toLocaleString('es-ES')}</p>
                <button className="btn btn-danger m-2" onClick={() => restar(pizzaFilter.id)}>-</button>
                <p>{pizzaFilter.cantidad}</p>
                <button className="btn btn-primary" onClick={() => sumar(pizzaFilter.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <h3>Total: ${total}</h3>
        <button className="btn btn-success">Ir a Pagar</button>
      </div>
    </div>
  )
}