import CartItemEmpty from "./CartItemEmpty"
import CartItems from "./cartItems"

export default function Cart({cartData, setCartData, dialogFunc}) {
    const totalCount = Object.keys(cartData).map(key=> cartData[key].count).reduce((a,b) => a+b)

    return (
        <aside className="cart-container grid-item">
            <h2 className="cart-title fs-700 fw-700 clr-red">
                <span>Your Cart</span>
                <span className="cart-values"> ({totalCount})</span>
            </h2>
            {totalCount === 0 &&  <CartItemEmpty />}
            {totalCount !== 0 && <CartItems cartData={cartData} setCartData={setCartData} dialogFunc={dialogFunc} orderConfirmed={true} />}
            
        </aside>
    )
}