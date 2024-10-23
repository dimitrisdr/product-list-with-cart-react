import './App.css'
import Card from './Card.jsx'
import Cart from './Cart.jsx'
import data from '../data.json'
import { useState } from 'react'
 
const startData = {}
data.forEach(el => startData[el.name] = {count:0, price:el.price})

function App() {
  const [cartData, setCartData] = useState(startData)
  
  return (
    <>
      <main className="main grid-item" style={{'--gap':'1.5rem'}}>
        <h1 className="main-title fw-700 fs-900">Desserts</h1>
        <section className="cards-container grid-item" aria-label='Product cards'>
          {data.map((item, i) => {return <Card
                                          key={i} 
                                          item = {item} 
                                          cartData={cartData}
                                          setCartData={setCartData}
                                          />
                                          })}
        </section>
      </main>
      <Cart cartData = {cartData} setCartData={setCartData} />
    </>
  )
}

export default App
