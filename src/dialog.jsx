export default function Dialog({cartData, setCartData, dialogRef, closeDialog}) {

    return (
    <dialog ref={dialogRef} className="dialog">
        <div className="dialog-content">
            <p>Hello! I'm open by default without modal behavior</p>
            <button className="btn close-btn" onClick={closeDialog} >Close Modal</button>
        </div>
    </dialog>
    )
}