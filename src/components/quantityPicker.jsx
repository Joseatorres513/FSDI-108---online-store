import { useState } from "react";
import "./styles/quantityPicker.css";

function QuantityPicker(props) {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        let value = quantity + 1;

        setQuantity(value);
        props.onChange(value);
        // NOTE:the setter is not immediate, it will take some time in milliseconds
    }

    function decrease() {
        if(quantity ==1) return;
        
        let value = quantity - 1;

        setQuantity(value);
        props.onChange(value);
    }

    return (
        <div className="qt-picker">
            <button className='btn tbn-sm btn-outline-primary' disabled={quantity == 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='btn tbn-sm btn-outline-primary' onClick={increase}>+</button>
        </div>
    )
}

export default QuantityPicker;