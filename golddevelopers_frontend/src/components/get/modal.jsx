import "../../styles/get/get.css";

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return(
        <>
            <div className="get-modal-container">
                <div className="get-modal-content">
                    <button className="get-button-close" onClick={onClose}>X</button>
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal;