import React from 'react';

function ProductItem({ product }) {
    return (
        <div className="card p-4" style={{ width: 370 }}>
            <img src={product.image} className="card-img-top" alt={`shoe-${product.id}`} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>${product.price}</p>
                <a href="#" className="btn btn-success">
                    View details<i className="bi bi-view-list ms-2"></i>
                </a>
            </div>
        </div>
    )
}

export default ProductItem;