import React from "react";
import "../../styles/post/post.css";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="form-modal-container">
            <div className="form-modal-content">
                <button className="form-button-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};
export default Modal;