import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function AddToCartButton({dataName}) {

    const {cartData, setCartData} = useContext(DataContext)

    function handleClick(){
        const newCartData = {...cartData}
        newCartData[dataName].count = 1
        setCartData(newCartData)
    }
    return (
        <button 
            className="btn cart-btn flex-item" 
            style={{'gap':'0.4rem'}}
            onClick={handleClick}
            data-name={dataName}
        >
            <img src="/product-list-with-cart-react/assets/images/icon-add-to-cart.svg" alt="cart" className="img btn-img" />
            <span className="btn-text fw-600 clr-rose-900">Add to Cart</span>
        </button>
    )
}