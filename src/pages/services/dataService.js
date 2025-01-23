
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

class DataService {

    getProducts() {
        //TODO: CAll the server to get the prods

        return dummyData;
    }

    saveProduct() {


    }

    getCategories() {

        return dummyCategories;
    }


}

export default new DataService();