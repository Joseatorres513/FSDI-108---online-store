import { useState } from "react";
import Product from "../components/product";
import "./styles/catalog.css";

const dummyData = [
    {
        "title": "Wilson Ball",
        "category": "Basketball",
        "price": 42.99,
        "image": "/images/wilsonball.jpg",
        "size": "Regular",
        "_id": "1"
    },
    {
        "title": "Gorilla Hoop",
        "category": "Hoops",
        "price": 412.99,
        "image": "/images/sturdyhoop.jpg",
        "size": "10 feet",
        "_id": "2"
    },
    {
        "title": "Zion25",
        "category": "Shoes",
        "price": 122.99,
        "image": "/images/zionshoes.webp",
        "size": "4-16",
        "_id": "3"
    },
    {
        "title": "Nike Long",
        "category": "Socks",
        "price": 22.99,
        "image": "/images/nikesocks.png",
        "size": "8-14",
        "_id": "4"
    },
    {
        "title": "NBA Long Pink",
        "category": "Socks",
        "price": 26.99,
        "image": "/images/nbasock.avif",
        "size": "8-14",
        "_id": "5"
    },
    {
        "title": "VICTEAM Ball",
        "category": "Basketball",
        "price": 34.99,
        "image": "/images/and1ball.jpg",
        "size": "Regular",
        "_id": "6"
    },
    {
        "title": "NBA Long Grey",
        "category": "Socks",
        "price": 26.99,
        "image": "/images/nbasock2.avif",
        "size": "8-14",
        "_id": "7"
    },
];

const dummyCategories = ["All", "Shoes", "Equipment", "Hoops", "Basketball", "Socks"];

function Catalog() {
    const [allProducts, setAllProducts] = useState(dummyData);
    const [filteredProducts, setFilteredProducts] = useState(dummyData); // For filtering
    const [allCategories, setAllCategories] = useState(dummyCategories);
    const [searchQuery, setSearchQuery] = useState(""); // For search functionality

    // Filter by Category
    const filterByCategory = (category) => {
        if (category === "All") {
            setFilteredProducts(allProducts);
        } else {
            setFilteredProducts(allProducts.filter(prod => prod.category === category));
        }
    };

    // Search Functionality
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredProducts(
            allProducts.filter(prod => prod.title.toLowerCase().includes(query))
        );
    };

    return (
        <div className="catalog page">
            <h1>Make a statement with sports essentials.</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>

            {/* Category Filter */}
            <div className="filter">
                {allCategories.map((cat, index) => (
                    <button
                        key={index}
                        className="btn btn-sm btn-primary filter-btn"
                        onClick={() => filterByCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Product Listing */}
            <div className="product-list">
                {filteredProducts.map((prod) => (
                    <Product key={prod._id} data={prod}></Product>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
