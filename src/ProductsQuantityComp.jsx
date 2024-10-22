import Card from "./Card"

export default function ProductsQuantityComp({count, setCount, cartData, setCartData, dataName}) {
    
    function handleClick(e) {
        const dir = e.target.closest('button').id  === 'incr'? 1 : -1 ;
        const newCartData = {...cartData}
        setCount(count + dir)
        if (count === 0) return 
        newCartData[dataName].count = count + dir
        setCartData(newCartData)
    }

    return (
        <div className="products-quantity flex-item">
            <button
             className="decr-button add-btn" 
             id="decr"
             onClick={handleClick}
             >
            <img src="public/assets/images/icon-decrement-quantity.svg" alt="remove" className="img" />
            </button>
            <span className="quantity clr-rose-50">{count}</span>
            <button 
             className="incr-button add-btn" id="incr" onClick={handleClick}>
                <img src="public\assets\images\icon-increment-quantity.svg" alt="add" className="img" />
            </button>
        </div>
    )
}