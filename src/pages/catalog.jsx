import { useEffect, useState } from "react";
import "./styles/catalog.css";
import Product from "../components/product";
import dataService from "./services/dataService";




function Catalog() {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // For filtering
    const [allCategories, setAllCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // For search functionality

    function loadData(){
        const prods = dataService.getProducts();
        setAllProducts(prods);
        setFilteredProducts(prods);

        const cats = dataService.getCategories();
        setAllCategories(cats);
    }
    // do something when the cmp loads
    useEffect(function() {
        loadData();
    }, []);
        
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
