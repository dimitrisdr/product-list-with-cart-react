export default function Dialog({cartData, setCartData, dialogRef, closeDialog}) {

    return (
    <dialog ref={dialogRef} className="dialog">
        <div className="dialog-content grid-item">
            <div className="title-container">
                <img src="public\assets\images\icon-order-confirmed.svg" alt="confirmed order" className="img confirm-img" />
            </div>
            <div className="titles-container grid-item" style={{'--gap':'0.5rem'}}>
                <h2 className="fw-700 fs-700 clr-rose-900">Order Confirmed</h2>
                <p className="clr-rose-500">We hope you enjoy your food!</p>
            </div>

            <button className="btn close-btn clr-rose-50" onClick={closeDialog} >Start New Order</button>
        </div>
    </dialog>
    )
}