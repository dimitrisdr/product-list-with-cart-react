
export default function CartItem({name, price, count}) {
    return (
        <div className="cart-item flex-item">
            <div className="cart-content">
                <h3 className="item-title fs-400 fw-700 clr-rose-900">{name}</h3>
                <div className="cart-data-container flex-item" style={{'--gap':'0.7rem'}}>
                    <span className="cart-number clr-red fw-700">{count}x</span>
                    <div className="cart-prices flex-item" style={{'--gap':'0.5rem'}}>
                        <span className="price-start clr-rose-300">@ {price}</span>
                        <span className="price-total clr-rose-500 fw-600">$ {price * count}</span>
                    </div>
                </div>
            </div>
            <button className="close-icon-btn grid-item">
                <img src="public\assets\images\icon-remove-item.svg" alt="close icon" className="img close-icon-img" />
            </button>
        </div>
    )
}