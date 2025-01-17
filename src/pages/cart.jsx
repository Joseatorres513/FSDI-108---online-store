import { useContext, useState } from 'react';
import './styles/cart.css';
import { Link } from 'react-router-dom';
import QuantityPicker from '../components/quantityPicker';
import GlobalContext from '../state/globalContext';

function Cart() {

    const cart = useContext(GlobalContext).cart;

    const totalPrice = cart.reduce((total, prod) => total + prod.price * prod.quantity, 0).toFixed(2);

    const totalQuantity = cart.reduce((total, prod) => total + prod.quantity, 0);
    return (
        <div className='cart page'>
            <h1>Ready to complete the purchase?</h1>
            
            <h3>
            We have {totalQuantity} products waiting for you!
            </h3>
            <div className="list">
                <ul>
                    {cart.map(prod =>
                        <li className="cart-prod">
                            <img src={prod.image} alt=''></img>
                            <div className="cart-prod-details">
                                <h6>{prod.title}</h6>
                                <label>Quantity: #{prod.quantity}</label>
                                <label>Price: ${prod.price.toFixed(2)}</label>
                                <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                                <button className="remove-btn">Remove</button>
                            </div>
                        </li> 
                    )}
                </ul>
            </div>
            <h3 className="cart-total">Grand Total: ${totalPrice}</h3>
        </div>

    )
}

export default Cart;