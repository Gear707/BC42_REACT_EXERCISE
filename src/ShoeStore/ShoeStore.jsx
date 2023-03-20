import React, { useState } from 'react';
import ProductList from "./ProductList";
import data from "./data.json";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";

function ShoeStore() {
    // create a new array (shoeList) from the data imported
    const shoeList = [...data];
    console.log(shoeList);
    // create a state of changing products
    const [selectedProduct, setSelectedProduct] = useState(null);
    // create a state of showing/hiding a modal (popup)
    const [showPopup, setShowPopup] = useState(false);
    // create a state of which product we choose to add to the cart
    const [cart, setCart] = useState([]);

    const handleGetProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleAddToCart = (product) => {
        // search whether or not the product is already added to the cart
        const index = cart.findIndex((item) => item.id === product.id);

        if (index === -1) {
            // if the product is not yet added => push the product to the cart and set a new property that is number with value 1
            // at the same time, the quantity property is decreased by 1
            const newProduct = { ...product, quantity: product.quantity -= 1, number: 1 };
            setCart([...cart, newProduct]);
        } else {
            // if the product already exists => we just need to increase the number by 1 and decrease the quantity by 1 respectively
            const newCart = [...cart];
            newCart[index].number += 1;
            newCart[index].quantity -= 1;
            setCart(newCart);
        }
    };

    const handleDeleteProductFromCart = (productID) => {
        // only display items that don't have the same id as productID
        const newCart = cart.filter((item) => item.id !== productID);
        setCart(newCart);
    };

    const handleUpdateNumber = (productID, addedNumber) => {
        const newCart = cart.map((item) => {
            if (item.id === productID) {
                return {...item, quantity: item.quantity - addedNumber, number: item.number + addedNumber};
            }
            return item;
        });
        setCart(newCart);
    };

    return (
        <div className="container my-3">
            <h1 className="text-center">Shoe Store</h1>
            <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => setShowPopup(true)}>
                    Cart<i className="bi bi-cart-check ms-2"></i>
                </button>
            </div>
            <ProductList productArr={shoeList}
                onSelectProduct={handleGetProduct}
                onAddToCart={handleAddToCart}
            />
            <ProductDetail product={selectedProduct}
                showPopup={showPopup}
                onHidePopup={() => setShowPopup(false)}
            />
            <Cart cart={cart}
                showPopup={showPopup}
                onHidePopup={() => setShowPopup(false)}
                onDeleteProduct={handleDeleteProductFromCart}
                onUpdateNumber={handleUpdateNumber}
            />
        </div>
    )
}

export default ShoeStore;