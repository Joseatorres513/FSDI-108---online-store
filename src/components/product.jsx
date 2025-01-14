import { useContext } from 'react';
import QuantityPicker from './quantityPicker';
import './styles/product.css';
import GlobalContext from '../state/globalContext';

function Product(props) {

    const globalAdd = useContext(GlobalContext).addProductToCart;

    function onAdd() {
        console.log("Test");
        globalAdd(props.data);
    }

    return (
    <div className="product">
        <img src={props.data.image} alt="" />
        <h3>
            {props.data.title}       
        </h3>
            <div className='parent'>

                <label>$99.99</label>
                <label>${props.data.price.toFixed(2)}</label>

            </div>
            
            <div className="parent">
                <QuantityPicker></QuantityPicker>
                <button className='btn btn-sm btn-primary' onClick={onAdd}>Add</button>
            </div>
    </div>
    );
}

export default Product;