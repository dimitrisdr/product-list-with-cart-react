import CartItemEmpty from "./CartItemEmpty"
import CartItems from "./cartItems"
import { useContext } from "react"
import { DataContext } from "./dataContext"


export default function Cart({dialogFunc}) {
    const {cartData} = useContext(DataContext)
    
    const totalCount = Object.keys(cartData).map(key=> cartData[key].count).reduce((a,b) => a+b)

    return (
        <aside className="cart-container grid-item">
            <h2 className="cart-title fs-700 fw-700 clr-red">
                <span>Your Cart</span>
                <span className="cart-values"> ({totalCount})</span>
            </h2>
            {totalCount === 0 &&  <CartItemEmpty />}
            {totalCount !== 0 && <CartItems dialogFunc={dialogFunc} orderConfirmed={true} />}
            
        </aside>
    )
}