import React from 'react';

function ProductItem({ product, onSelectProduct, onAddToCart }) {
    return (
        <div className="card shadow rounded-4 overflow-hidden">
            {/* click the image to open the modal to view the product detail */}
            <img role="button" src={product.image} className="card-img-top" alt={product.id} onClick={() => onSelectProduct(product)} />
            <div className="card-body bg-dark text-white p-4">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ fontSize: 25, fontWeight: "600" }}>${product.price}</p>
                <button className="btn btn-success btnStyle" onClick={() => onAddToCart(product)}>
                    Add to cart<i className="bi bi-cart ms-2"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductItem;