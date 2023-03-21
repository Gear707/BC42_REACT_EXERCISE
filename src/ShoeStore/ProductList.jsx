import React from 'react';
import ProductItem from "./ProductItem";

function ProductList({ productArr, onAddToCart }) {
    const handleAddToCart = (product) => {
        onAddToCart(product);
    };

    return (
        <div className="row">
            {productArr.map((item) => {
                return (
                    <div key={item.id} className="col-4 my-4">
                        <ProductItem product={item} onAddToCart={handleAddToCart} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;