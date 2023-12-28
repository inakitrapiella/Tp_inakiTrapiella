import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "./css/Carrito.css"

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const handleVaciar = () => {
       vaciarCarrito();
    }

  return (
    <div className='conti'>
<h1 className='main-title'>carrito</h1>

{
    carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title} </h3>
          <p>precio unit: ${prod.price}</p>
          <p>precio total: ${prod.price * prod.cantidad}</p>
          <p>cant:{prod.cantidad} </p>
         
        </div>
    ))
}

{ 
carrito.length > 0 ?
<>
 <h2>Precio total:${precioTotal()}</h2>
<button onClick={handleVaciar}>Vaciar</button>
<button ><Link to="/Checkout">Finalizar compra</Link></button>
</> :
<h2>El carrito esta vacio</h2>
}
    </div>
  )
}

export default Carrito