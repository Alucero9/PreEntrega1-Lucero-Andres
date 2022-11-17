import { randProduct } from "@ngneat/falso"
import { useContext } from "react"
import { contexto } from "./CustomProvider"
import ItemCount from "./ItemCount"

const ItemDetail = () => {

    const producto = randProduct()
    const valorDelContexto = useContext(contexto)
    
    
    const handleOnAdd = (cantidad) => {
        console.log("Se agregaron " + cantidad + " productos")
        console.log(producto)
    }

    const agregarAlCarrito = () => {
       
       valorDelContexto.vaciarCarrito()
    }

    return (
        <div>
            <h2>{producto.title} - ${producto.price}</h2>
            <div className="detail-flex">
                <img src={producto.image} alt={producto.title} />
                <div>
                    <p>{producto.description}</p>
                    <p>{producto.description}</p>
                    <ItemCount handleOnAdd={handleOnAdd}/>
                    <button onClick={agregarAlCarrito}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail