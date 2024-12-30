import './styles/navbar.css';

function Catalog() {
    // Example product data
    const products = [
    { id: 1, name: "Product 1", price: "$10.00", description: "Description of Product 1" },
    { id: 2, name: "Product 2", price: "$20.00", description: "Description of Product 2" },
    { id: 3, name: "Product 3", price: "$30.00", description: "Description of Product 3" },
    ];

    return (
    <div>
        <h2>Catalog</h2>
        {products.map(product => (
        <Product key={product.id} product={product} />
        ))}
    </div>
    );
}

export default Catalog;