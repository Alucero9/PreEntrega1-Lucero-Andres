import { createContext, useState } from "react"

export const contexto = createContext() 

const { Provider } = contexto 

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const [total, setTotal] = useState()

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const valorDelContexto = {
        productos: carrito,
        cantidad: total,
       
        vaciarCarrito: vaciarCarrito
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider

