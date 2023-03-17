import React from 'react';
import ProductList from "./ProductList";
import data from "./data.json";

function ShoeStore() {
    // create a new array (shoeList) from the data imported
    const shoeList = [...data];
    console.log(shoeList);

    return (
        <div className="container my-3">
            <h1 className="text-center">Shoe Store</h1>
            <ProductList productArr={shoeList}/>
        </div>
    )
}

export default ShoeStore;