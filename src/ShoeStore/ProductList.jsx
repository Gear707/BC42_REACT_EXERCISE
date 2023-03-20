import React from 'react';
import ProductItem from "./ProductItem";

function ProductList({ productArr, onSelectProduct, onAddToCart }) {
    const handleGetProduct = (product) => {
        onSelectProduct(product);
    };

    const handleAddToCart = (product) => {
        onAddToCart(product);
    };

    return (
        <div className="row">
            {productArr.map((item) => {
                return (
                    <div key={item.id} className="col-4 my-4">
                        <ProductItem product={item}
                            onSelectProduct={handleGetProduct}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;