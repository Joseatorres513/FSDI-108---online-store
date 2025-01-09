import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {
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
            

            <QuantityPicker></QuantityPicker>
    </div>
    );
}

export default Product;