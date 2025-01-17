import { useState } from 'react';
import './styles/admin.css';

function Admin() {

    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [product, setProduct] = useState({
            title: "",
            price: "",
            image: "",
            category: ""

    });
    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        let copy = {...product};
        if(name == "title") {
            copy.title = text;
        }
        else if(name == "price") {
            copy.price = text;
        }
        else if(name == "image") {
            copy.image = text;
        }
        else if(name == "category") {
            copy.category = text;
        }
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;

        console.log(name, text);

        /*
            To modify state var that hold Object or Array:
            - create a copy
            - modify the copy
            - set the copy back
         */

        let copy = { ...coupon };
        if (name == "code") {
            copy.code = text;
        }
        else if (name == "discount") {
            copy.discount = text;
        }
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    return (
        <div className="admin page">
            <h1>Our Discounts Are Almost To Good To Be True!</h1>

            <div className='parent'>
                <div className='prod-form nice-form'>
                    <h3>Register Products</h3>
                    <div>
                        <label className="form-label">Title:</label>
                        <input id="title" type="text" className="form-control" onBlur={handleProduct} name="title" />
                    </div>

                    <div>
                        <label className="form-label">Price:</label>
                        <input id="price" type="text" className="form-control" onBlur={handleProduct} name="price" />
                    </div>

                    <div>
                        <label className="form-label">Image:</label>
                        <input id="image" type="text" className="form-control" onBlur={handleProduct} name="image" />
                    </div>

                    <div>
                        <label className="form-label">Category:</label>
                        <input id="category" type="text" className="form-control" onBlur={handleProduct} name="category" />
                    </div>

                    <div className='controls'>
                        <button type="button" className="btn btn-primary" onClick={saveProduct} >Save Product</button>
                    </div>
                    <ul>
                    {allProducts.map( prod => <li>{prod.title} - ${prod.price} </li>)}
                    </ul>
                </div>

                <div className='coupon-form nice-form'>
                    <h3>Register Coupon Codes</h3>

                    <div>
                        <label className="form-label">Code:</label>
                        <input id="code" type="text" className="form-control" onBlur={handleCoupon} name="code" />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="number" className="form-control" onBlur={handleCoupon} name="discount" />
                    </div>

                    <div className='controls'>
                        <button type="button" className="btn btn-primary" onClick={saveCoupon}>Save Coupon</button>
                    </div>
                    <ul>
                    {allCoupons.map( cp => <li>{cp.code} - {cp.discount}% </li>)}
                    </ul>
                </div>
            </div>
        </div >


    );
}

export default Admin;