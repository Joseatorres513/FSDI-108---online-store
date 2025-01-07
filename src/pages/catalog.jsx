import { useState } from "react";
import Product from "../components/product";
import "./styles/catalog.css";

const dummyData = [
    {
        "title": "Wilson Ball",
        "category": "Basketball",
        "price": 42.99,
        "image": "/images/wilsonball.jpg",
        "_id": "1"
    },
    {
        "title": "Gorilla Hoop",
        "category": "Hoops",
        "price": 412.99,
        "image": "/images/sturdyhoop.jpg",
        "_id": "2"
    }, {
        "title": "Zion25",
        "category": "Shoes",
        "price": 122.99,
        "image": "/images/zionshoes.webp",
        "_id": "3"
    },
    {
        "title": "Nike Long",
        "category": "Socks",
        "price": 22.99,
        "image": "/images/nikesocks.png",
        "_id": "4"
    },
    {
        "title": "NBA Long Pink",
        "category": "Socks",
        "price": 26.99,
        "image": "/images/nbasock.avif",
        "_id": "5"
    },{
        "title": "AND1 Ball",
        "category": "Basketball",
        "price": 22.99,
        "image": "/images/and1ball.jpg",
        "_id": "6"
    },
    {
        "title": "NBA Long Grey",
        "category": "Socks",
        "price": 26.99,
        "image": "/images/nbasock2.avif",
        "_id": "7"
    },
];

const dummyCategories = ["Shoes", "Equipment", "Hoops", "Basketballs", "Socks"];

function Catalog() {
    const [allProducts, setAllProducts] = useState(dummyData);
    const [allCategories, setAllCategories] = useState(dummyCategories);

    return(
        <div className="catalog page">
            <h1> Check out our amazing catalog!</h1>



            {
                allProducts.map( prod => <Product data={prod}></Product>)
            }
            <div className="filter">
            {
            allCategories.map( cat => <button className="btn btn-sm btn-primary">{cat}</button>)
            }
            </div>
        </div>
    );
}

export default Catalog;