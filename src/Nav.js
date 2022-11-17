import React from "react"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { productosIniciales } from "./utils"

const Nav = () => {
    return (
        <nav className="nav">
            {productosIniciales.map((item) => {
                return (
                    <NavLink to={`/productos/${item.category}`} key={item.category} className="link" activeClassName="active">
                        {item.category}
                    </NavLink>
                )})}
            <NavLink className="nav__link link" to="/productos">Cervezas</NavLink>
            {/* <NavLink className="nav__link link" to="/productos/Rubia">Rubia</NavLink>
            <NavLink className="nav__link link" to="/productos/Roja">Roja</NavLink>
            <NavLink className="nav__link link" to="/productos/Negra">Negra</NavLink> */}
            <CartWidget/>
        </nav>
    )
}

export default Nav