import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {

    function onAdd() {
        console.log("Test");
    }

    return (
    <div className="product">
        <img src={props.data.image} alt="" />
        <h3>
            {props.data.title}       
        </h3>
            <div className='parent'>

                <label>$99.99</label>
                <label>${props.data.price}</label>

            </div>
            
            <div className="parent">
                <QuantityPicker></QuantityPicker>
                <button className='btn btn-sm btn-primary' onClick={onAdd}>Add</button>
            </div>
    </div>
    );
}

export default Product;