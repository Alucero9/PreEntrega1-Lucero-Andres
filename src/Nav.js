import React from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink className="nav__link link" to="/productos">Cervezas</NavLink>
            <NavLink className="nav__link link" to="/productos/Rubia">Rubia</NavLink>
            <NavLink className="nav__link link" to="/productos/Roja">Roja</NavLink>
            <NavLink className="nav__link link" to="/productos/Negra">Negra</NavLink>
            <NavLink className="nav__link link" to="/carrito">Carrito</NavLink>
        </nav>
    )
}

export default Nav