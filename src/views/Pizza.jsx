import { useContext, useEffect, useState } from "react";
// Se importa useParams desde "react-router-dom"
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

export default function Pizza() {
  
  const { pizzas, addToCart } = useContext(PizzaContext);
  // Se ocupa el hook useParams()para que el componente acceda a los parámetros de la URL.
  const {id} = useParams();

  const selectedItem = pizzas?.find((item) => item.id === id);
  console.log(selectedItem)

  return (
    <>
      
        <div className="card m-3">
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center">
              <img src={selectedItem.img} className="img-fluid rounded" alt={`Imagen de Pizza ${selectedItem.name}`}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {selectedItem.name[0].toUpperCase() + selectedItem.name.substring(1)}
                </h5>
                <hr />
                <p className="card-text">{selectedItem.desc}</p>
                <hr />
                <dl>
                  <dt>
                    <p>Ingredientes:</p>
                  </dt>
                  {selectedItem.ingredients.map((item) => {
                    return (<dd key={item}>🍕 {item[0].toUpperCase() + item.substring(1)}</dd>);
                  })}
                </dl>
                <hr />
                <div className="card-text d-flex justify-content-between">
                  <h3>Precio: ${selectedItem.price.toLocaleString()}</h3>

                  <button className="btn btn-danger" onClick={()=>addToCart(selectedItem.id)}> Añadir 🛒</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );

}
