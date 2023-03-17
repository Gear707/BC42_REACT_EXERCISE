import React from 'react';
import ProductItem from "./ProductItem";

function ProductList({ productArr }) {
    return (
        <div className="row">
            {productArr.map((item) => {
                return (
                    <div key={item.id} className="col-4 my-4">
                        <ProductItem product={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;