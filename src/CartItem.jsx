
export default function CartItem({itemName, cartData, setCartData, orderConfirmed}) {
    function handleClick() {
        let newCartData = {...cartData};
        newCartData[itemName].count = 0;
        setCartData(newCartData);
    }

    const {count, price} = cartData[itemName];

    return (
        <div className="cart-item flex-item">
            <div className="cart-content">
                <h3 className="item-title fs-400 fw-700 clr-rose-900">{itemName}</h3>
                <div className="cart-data-container flex-item" style={{'--gap':'0.7rem'}}>
                    <span className="cart-number clr-red fw-700">{count}x</span>
                    <div className="cart-prices flex-item" style={{'--gap':'0.5rem'}}>
                        <span className="price-start clr-rose-500">@ ${price}</span>
                        {orderConfirmed && <span className="price-total clr-rose-500 fw-600">${price * count}</span>}        
                    </div>
                </div>
            </div>
            {
                orderConfirmed ?             
                <button className="close-icon-btn grid-item" onClick={handleClick}>
                    <img src="public\assets\images\icon-remove-item.svg" alt="close icon" className="img close-icon-img" />
                </button>
                :
                <span className="price-total clr-rose-900 fw-700">${price * count}</span>
            }

        </div>
    )
}