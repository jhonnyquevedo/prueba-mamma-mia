import React, { createContext, useState, useEffect } from "react"

// Se exporta “PizzaContext” para que pueda ser utilizado en cualquier componente que necesite el contexto. (utilizado en el hook useContext)
export const PizzaContext = createContext();

const url = "./pizzas.json"

const PizzaProvider = ({ children }) => {

  const [pizzas, setPizzas] = useState([]);
  const [total, setTotal] = useState(0)

  // Función que consulta la API, es declarada async para poder utilizar await que a su vez espera el resultado de los métodos fetch y json()
  const getPizzas = async () => {

    // Se utiliza try catch para mostrar en consola algun error en caso de que el bloque de código dentro de try falle
    try {
      const response = await fetch(url);
      const data = await response.json();
      const dataCantidad = data.map((pizza) => ({ ...pizza, cantidad: 0 }));
      setPizzas(dataCantidad);
      console.log(dataCantidad)
      throw new Error("Este es un mensaje de error");
      
    } catch (error) {
      console.log(error);
    }
  }

   // Se llama a la función getPizzas sólo al momento del montaje
  useEffect(() => {
    getPizzas()
  }, [])

  const addToCart = (id) => {
    setPizzas(pizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, cantidad: (pizza.cantidad + 1) }
      }
      return pizza;
    }))
  }

  const sumar = (id) => {
    setPizzas(pizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, cantidad: (pizza.cantidad + 1) }
      }
      return pizza;
    }))
  }
  
  const restar = (id) => {
    setPizzas(pizzas.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, cantidad: (pizza.cantidad - 1) }
      }
      return pizza;
    }))
  }

  

  const calcular = () => {
    const total = pizzas.reduce((acumulador, actual) => {
      return acumulador + (actual.cantidad * actual.price)
    }, 0)
    setTotal(total)
  }

  useEffect(() => {
    calcular()
  }, [pizzas])



  return (
    <>
      <PizzaContext.Provider value={{ pizzas, setPizzas, addToCart, sumar, restar, total }}>
        {children}
      </PizzaContext.Provider>
    </>
  )
}

export default PizzaProvider