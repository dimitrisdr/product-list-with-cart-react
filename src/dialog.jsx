import CartItems from "./cartItems"

export default function Dialog({cartData, setCartData, dialogRef, dialogFunc}) {

    return (
    <dialog ref={dialogRef} className="dialog">
        <div className="dialog-content grid-item">
            <div className="title-container">
                <img src="public\assets\images\icon-order-confirmed.svg" alt="confirmed order" className="img confirm-img" />
            </div>
            <div className="titles-container">
                <h2 className="fw-700 fs-900 clr-rose-900">Order Confirmed</h2>
                <p className="clr-rose-500">We hope you enjoy your food!</p>
            </div>
            <CartItems cartData={cartData} setCartData={setCartData} dialogFunc={dialogFunc} orderConfirmed={false} />

        </div>
    </dialog>
    )
}