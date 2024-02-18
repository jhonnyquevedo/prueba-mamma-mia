import React, { useContext } from "react";
//Se importa useNavigate desde "react-router-dom"
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";


function Main() {

    const { pizzas, addToCart } = useContext(PizzaContext);

    // Se utiliza el hook useNavigate() para hacer redireccionamiento programático, creando una vista que redireccione a una ruta /pizza/:id
    const navigate = useNavigate();
    
    
    const handleClick = (e) => {
        navigate(`/pizza/${e.target.id}`);
    };

    return (
        <>
            {pizzas.map((item) => {
                return (
                    <div key={item.id} className="card" style={{ width: "30rem" }}>
                        <img src={item.img} alt={`Imagen de Pizza ${item.name}`} />
                        <div className="card-body">
                            <h3 className="card-text">
                                <strong>
                                    {item.name[0].toUpperCase() + item.name.substring(1)}
                                </strong>
                            </h3>
                            <hr />
                            <dl>
                                <dt>
                                    <p>Ingredientes:</p>
                                </dt>

                                {item.ingredients.map((i) => {
                                    return (
                                        <dd key={i}>🍕 {i[0].toUpperCase() + i.substring(1)}</dd>
                                    );
                                })}
                            </dl>

                            <hr />
                            <h3 className="card-text text-center">
                                ${item.price.toLocaleString()}
                            </h3>
                            <div className="d-flex justify-content-around">
                                <button className="btn btn-info" onClick={handleClick} id={item.id}>
                                    Ver Más 👀
                                </button>
                                <button className="btn btn-danger" onClick={() => addToCart(item.id)}>
                                    Añadir 🛒
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )
}

export default Main