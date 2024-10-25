import { useContext } from "react";
import { DataContext } from "./dataContext";


export default function ProductsQuantityComp({dataName}) {

    const {cartData, setCartData} = useContext(DataContext)
    
    function handleClick(e) {
        const dir = e.target.closest('button').id  === 'incr'? 1 : -1 ;
        const newCartData = {...cartData}
        if (newCartData[dataName].count === 0) return 
        newCartData[dataName].count += dir
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
            <span className="quantity clr-rose-50">{cartData[dataName].count}</span>
            <button 
             className="incr-button add-btn" id="incr" onClick={handleClick}>
                <img src="public\assets\images\icon-increment-quantity.svg" alt="add" className="img" />
            </button>
        </div>
    )
}