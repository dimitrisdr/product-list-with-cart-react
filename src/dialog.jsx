import CartItems from "./cartItems"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function Dialog({dialogRef, dialogFunc}) {


    return (
    <dialog ref={dialogRef} className="dialog">
        <div className="dialog-content grid-item">
            <div className="title-container">
                <img src="public\assets\images\icon-order-confirmed.svg" alt="confirmed order" className="img confirm-img" />
            </div>
            <div className="titles-container">
                <h2 className="fw-700 fs-700 clr-rose-900">Order Confirmed</h2>
                <p className="clr-rose-500">We hope you enjoy your food!</p>
            </div>
            <CartItems dialogFunc={dialogFunc} orderConfirmed={false} />

        </div>
    </dialog>
    )
}