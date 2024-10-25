import AddToCartButton from "./AddToCartButton"
import ProductsQuantityComp from "./ProductsQuantityComp"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function Card({item}) {

   const {cartData} = useContext(DataContext)

    return (
        <div className="card-container grid-item">
            <div className="card-main-info">
                <picture className='img-container'>
                    <source srcSet={`${item.image.tablet}`} media="(min-width:35em)" /> 
                    <source srcSet={`${item.image.desktop}`} media="(min-width:45em)" />
                    <img src= {`${item.image.mobile}`} alt="food" className={`img card-main-img  ${cartData[item.name].count !== 0 && 'border-red'}`} />
                </picture>
                <div className="btn-container">
                   {cartData[item.name].count !== 0 ? 
                                <ProductsQuantityComp dataName = {item.name}/>
                                : 
                                <AddToCartButton dataName = {item.name}
                                />
                    }     
                </div>
            </div>
            <div className="info-container">
                <span className="product-cat fs-300 clr-rose-400">{item.category}</span>
                <h2 className="product-title fw-600 clr-rose-900">{item.name}</h2>
                <span className="product-price fw-600 clr-red">{item.price}$</span>
            </div>
        </div>
    )
}
