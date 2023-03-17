import React from 'react';
import ProductItem from "./ProductItem";

function ProductList({ products }) {
    return (
        <div className="row">
            {products.map((item) => {
                return (
                    <div key={item.id} className="col-4 my-3">
                        <ProductItem product={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;