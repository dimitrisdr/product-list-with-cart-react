import './App.css'
import Card from './Card.jsx'
import Cart from './Cart.jsx'
import Dialog from './dialog.jsx'
import data from '../data.json'
import { useState } from 'react'
import { useRef } from "react"

const startData = {}
data.forEach(el => startData[el.name] = {count:0, price:el.price})

function App() {

  const [cartData, setCartData] = useState(startData)
  const dialogRef = useRef()

  function openDialog() {
    console.log('modal opened')
    dialogRef.current.showModal()
  }

  function closeDialog() {
    dialogRef.current.close()
    let newCartData = {...cartData}
    Object.keys(newCartData).forEach(key => newCartData[key].count = 0)
    setCartData(newCartData)
  }

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
      <Cart cartData = {cartData} setCartData={setCartData} dialogFunc={openDialog} />
      <Dialog cartData={cartData} 
              setCartData={setCartData} 
              dialogRef={dialogRef} 
              dialogFunc={closeDialog}/>
    </>
    
  )
}

export default App
