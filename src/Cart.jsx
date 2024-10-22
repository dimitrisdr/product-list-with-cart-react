import CartItemEmpty from "./CartItemEmpty"
import CartItems from "./cartItems"

export default function Cart({cartData}) {
    const totalCount = Object.keys(cartData).map(key=> cartData[key].count).reduce((a,b) => a+b)
    console.log(totalCount)
    return (
        <aside className="cart-container grid-item">
            <h2 className="cart-title fs-700 fw-700 clr-red">
                <span>Your Cart</span>
                <span className="cart-values"> ({totalCount})</span>
            </h2>
            {totalCount === 0 &&  <CartItemEmpty />}
            {totalCount !== 0 && <CartItems cartData={cartData}/>}
            
        </aside>
    )
}