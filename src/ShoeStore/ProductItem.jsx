import React from 'react';

function ProductItem({ product }) {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price} $</p>
                <a href="#" className="btn btn-success">Add to cart</a>
            </div>
        </div>
    )
}

export default ProductItem;