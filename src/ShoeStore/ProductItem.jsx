import React from 'react';

function ProductItem({ product, onAddToCart }) {
    return (
        <div className="card shadow rounded-4 overflow-hidden">
            <img src={product.image} className="card-img-top" alt={product.id} />
            <div className="card-body bg-dark text-white p-4">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ fontSize: 18 }}>{product.shortDescription}</p>
                <p className="card-text" style={{ fontSize: 25, fontWeight: "600"}}>${product.price}</p>
                <button className="btn btn-success btnStyle" onClick={() => onAddToCart(product)}>
                    Add to cart<i className="bi bi-cart ms-2"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductItem;