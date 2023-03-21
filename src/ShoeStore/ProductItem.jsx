import React from 'react';

function ProductItem({ product, onAddToCart }) {
    return (
        <div className="card p-4">
            <img src={product.image} className="card-img-top" alt={product.id} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>${product.price}</p>
                <button className="btn btn-success" onClick={() => onAddToCart(product)}>
                    Add to cart<i className="bi bi-cart ms-2"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductItem;