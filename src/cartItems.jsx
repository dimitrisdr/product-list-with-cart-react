import CartItem from "./CartItem"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function CartItems({ dialogFunc, orderConfirmed}) {

    const {cartData} = useContext(DataContext)

    const totalPrice = Object.keys(cartData).map(key => cartData[key].count*cartData[key].price).reduce((a,b) => a + b)
     return (
        <>
            <div className="cart-items-container grid-item">
                <div className="cart-items">
                    {Object.keys(cartData).map(key => {
                        if (cartData[key].count === 0) return
                        return <CartItem key={key} itemName={key} orderConfirmed={orderConfirmed} /> })}
                </div>
                <div className="order-total flex-item">
                    <span className="order-total-txt clr-rose-500">Order Total</span>
                    <span className="order-total-num fs-700 fw-700 clr-rose-900">${totalPrice}</span>
                </div>
                {
                    orderConfirmed
                    &&
                    <div className="carbon-free-msg flex-item">
                        <img src="/product-list-with-cart-react/assets/images/icon-carbon-neutral.svg" alt="carbon free icon" className="img" />
                        <p className="carbon-free-msg-txt clr-rose-500">This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>
                }
            </div>
            <button onClick={dialogFunc} className="btn confirm-order-btn clr-rose-50">{orderConfirmed?'Confirm Order': 'Start New Order'}</button>
        </>
     )
}