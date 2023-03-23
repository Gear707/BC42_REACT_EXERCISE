import React from 'react';

function Modal({ product, onHideModal }) {
    if (!product) return null;

    return (
        <>
            <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h3 className="modal-title" style={{ color: "darkred" }}>{product.name}</h3>
                        </div>
                        <div className="modal-body d-flex justify-content-center">
                            <div className="d-flex flex-column justify-content-center align-items-center px-4">
                                <img src={product.image} alt={product.id} width={300} />
                                <p style={{ fontSize: 20, color: "darkblue" }}>{product.description}</p>
                                <p className="fw-bold fs-3 mb-0">Price: ${product.price}</p>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button className="btn btn-secondary" onClick={() => onHideModal(!product, false)}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>
    )
}

export default Modal;