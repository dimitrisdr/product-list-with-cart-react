

export default function CartItemEmpty() {
    return (
    <div className="cart-empty grid-item">
        <img src="public\assets\images\illustration-empty-cart.svg" alt="cake image" className="img cart-empty-img" />
        <p className="cart-item-info cart-item-info-empty clr-rose-400 fw-300">Your added items will appear here</p>
    </div>
    )
}