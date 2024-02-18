import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Se importa el componente BrowserRouter del paquete react-router-dom, para mantener actualizado el UI en función de la URL
import { BrowserRouter } from 'react-router-dom';
// Se importa PizzaProvider para proveer el contexto
import PizzaProvider from './context/PizzaContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* Envolvemos en “PizzaProvider” todos los componentes que deseamos que accedan al contexto  */}
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
