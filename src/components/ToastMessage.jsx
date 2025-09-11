import React, { useEffect, useRef } from 'react'
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min';


const ToastMessage = ({ show, message, type = "success", delay = 2000, onClose }) => {
    const toastRef = useRef(null);

    useEffect(() => {
        if (show && toastRef.current) {
            const bsToast = new Toast(toastRef.current, { delay });
            bsToast.show();

            toastRef.current.addEventListener('hidden.bs.toast', () => {
                onClose?.();
            });
        }
    }, [show, delay, onClose]);

    return (
        <div className="toast-container" data-type={type}>
            <div ref={toastRef} className="toast" data-type={type} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    <i className={`${type === "error" ? "fa-regular fa-circle-exclamation" : "fa-solid fa-square-check"}`}></i>
                    <span>{message}</span>
                </div>
            </div>
        </div>
    )
}

export default ToastMessage;