import { CartContext } from "./CartContext"
import { useContext } from "react"

const Cart = () => {
    const ctx = useContext(CartContext);

    return (
        <>
            <h1>Tu carrito</h1>
            <ul>
                {
                    ctx.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </>
    )
}

export default Cart;