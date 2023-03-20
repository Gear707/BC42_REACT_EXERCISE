import React from 'react';

function ProductItem({ product, onSelectProduct, onAddToCart }) {
    return (
        <div className="card p-4">
            <img src={product.image} className="card-img-top" alt={product.id} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>${product.price}</p>
                <button className="btn btn-success" onClick={() => onSelectProduct(product)}>
                    View details<i className="bi bi-view-list ms-2"></i>
                </button>
                <button className="btn btn-warning ms-2" onClick={() => onAddToCart(product)}>
                    Add to cart<i className="bi bi-cart ms-2"></i>
                </button>
            </div>
        </div>
    )
}

export default ProductItem;