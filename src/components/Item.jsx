import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div className='producto'>
      <img src={producto.image} alt={producto.title} />
      <div>
        <h4>{producto.title}</h4>
        <p>Precio: ${producto.price}</p>
        <p>Categoria: {producto.categoria} </p>
        <Link className="ver-mas" to={`/item/${producto.id}`} >ver mas</Link>
      </div>
    </div>
  )
}

export default Item