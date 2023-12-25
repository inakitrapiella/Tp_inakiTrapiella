import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/" className='logo'><h1>Tienda F1</h1></Link>
        <ul className='menu'>
            <li><Link className='menu-link' to='/'>Inicio</Link></li>
            <li><Link className='menu-link' to='/productos'>Productos</Link></li>
            <li><Link className='menu-link' to='/productos/Accesorios'>Accesorios</Link></li>
            <li><Link className='menu-link' to='/productos/Gorras'>Gorras</Link></li>
            <li><Link className='menu-link' to='/productos/Abrigos'>Abrigos</Link></li>
            <li><Link className='menu-link' to='/productos/Chombas'>Chombas</Link></li>
            <li><Link className='menu-link' to='/productos/Remeras'>Remeras</Link></li>
            <li><Link className='menu-link' to='/nosotros'>Nosotros</Link></li>
            <li><Link className='menu-link' to='/contacto'>Contacto</Link></li>

            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default Navbar;