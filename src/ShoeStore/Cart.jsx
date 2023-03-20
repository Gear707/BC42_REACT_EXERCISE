import React from 'react';

function Cart({ cart, showPopup, onHidePopup, onDeleteProduct, onUpdateNumber }) {
    if (!showPopup) return null;

    return (
        <>
            <div className="modal fade show" style={{ display: 'block' }} tabIndex={-1}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h2 className="modal-title">All Products In Cart</h2>
                        </div>
                        <div className="modal-body">
                            <table className="table align-middle">
                                <thead className="text-center">
                                    <tr>
                                        <th>ID</th>
                                        <th>Product Name</th>
                                        <th>Image</th>
                                        <th>Description</th>
                                        <th>Stock</th>
                                        <th>Number</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>
                                                    <img src={item.image} alt={item.name} width="70px" />
                                                </td>
                                                <td >{item.description}</td>
                                                <td>{item.quantity}</td>
                                                <td>
                                                    <button className="btn btn-light align-baseline px-1 lh-1" onClick={() => onUpdateNumber(item.id, -1)}>-</button>
                                                    <span className="mx-1">{item.number}</span>
                                                    <button className="btn btn-light align-baseline px-1 lh-1" onClick={() => onUpdateNumber(item.id, 1)}>+</button>
                                                </td>
                                                <td>${(item.price * item.number).toLocaleString()}</td>
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => onDeleteProduct(item.id)}>
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={onHidePopup}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show" />
        </>
    )
}

export default Cart;