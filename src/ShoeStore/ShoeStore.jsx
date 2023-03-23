import React, { useState } from 'react';
import ProductList from "./ProductList";
import data from "./data.json";
import Cart from "./Cart";
import Swal from "sweetalert2";
import "./btnStyle.scss";
import Modal from "./Modal";

function ShoeStore() {
    // create a new array (shoeList) from the data imported
    const shoeList = [...data];
    console.log(shoeList);

    // display product we chose on the modal
    const [selectedProduct, setSelectedProduct] = useState(null);

    // create a state of showing/hiding the cart
    const [showCart, setShowCart] = useState(false);

    // create a state of which product we choose to add to the cart
    const [cart, setCart] = useState([]);

    // use sweetalert2 library to create varied alerts
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 800
    })
    const alertSuccess = (text) => {
        Toast.fire({
            icon: 'success',
            title: text
        })
    };

    // select product to display on the modal
    const handleSelectProduct = (product, isOpenModal = true) => {
        if (!product) isOpenModal = false;  // this condition is applied to "Close" button in the modal
        setSelectedProduct(product);
    };

    // add products to cart
    const handleAddToCart = (product) => {
        // search whether or not the product is already added to the cart
        const index = cart.findIndex((item) => item.id === product.id);

        if (index === -1) {
            // if the product is not yet added => push the product to the cart and set a new property - number with value 1
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

        // display the alert
        alertSuccess('Successfully added to the cart');
    };

    // remove any product from cart
    const handleDeleteProductFromCart = (productID) => {
        // only display items that don't have the same id as productID
        const newCart = cart.filter((item) => item.id !== productID);
        setCart(newCart);

        // display the alert
        alertSuccess('Successfully deleted from the cart');
    };

    // adjust the number of products added to cart
    const handleUpdateNumber = (productID, addedNumber) => {
        const newCart = cart.map((item) => {
            if (item.id === productID) {
                return {
                    ...item,
                    quantity: item.quantity - addedNumber,
                    number: item.number + addedNumber
                };
            }
            return item;
        });
        setCart(newCart);
    };

    // display total number of products added to cart
    const totalItemInCart = cart.reduce((total, item) => {
        return total + item.number;
    }, 0);

    return (
        <div className="container my-3">
            <h1 className="text-center">Shoe Store</h1>
            <div className="d-flex justify-content-end">
                <button className="btn btn-warning fs-5" onClick={() => setShowCart(true)}>
                    <i className="bi bi-cart-check"></i>
                    {totalItemInCart > 0 && <span className="ms-2">({totalItemInCart})</span>}
                </button>
            </div>
            <ProductList productArr={shoeList}
                onSelectProduct={handleSelectProduct}
                onAddToCart={handleAddToCart} />
            <Modal product={selectedProduct}
            onHideModal={handleSelectProduct} />
            <Cart cart={cart}
                showCart={showCart}
                onHideCart={() => setShowCart(false)}
                onDeleteProduct={handleDeleteProductFromCart}
                onUpdateNumber={handleUpdateNumber} />
        </div>
    )
}

export default ShoeStore;