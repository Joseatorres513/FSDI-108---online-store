import './styles/navbar.css';

function Product({ product }) {
    return (
    <div className="product">
        <h3>
        {product.name} - {product.price}
        </h3>
        <p>{product.description}</p>
    </div>
    );
}

export default Product;