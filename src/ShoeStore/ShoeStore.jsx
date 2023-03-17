import React from 'react';
import ProductList from "./ProductList";
import data from "./data.json";

function ShoeStore() {
    // create a new array (shoeList) from the data imported
    const shoeList = [...data];
    console.log(shoeList);

    return (
        <div className="container text-center my-3">
            <h1>ShoeStore</h1>
            <ProductList products={shoeList}/>
        </div>
    )
}

export default ShoeStore;