import './styles/admin.css';

function Admin() {
    return (
        <div className="admin page">
            <h1>Store Administration</h1>

            <div className='parent'>
                <div className='prod-form nice-form'>
                    <h3>Register Products</h3>
                    <div>
                        <label className="form-label">Title:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Image:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Price:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='controls'>
                    <button type="button" class="btn btn-primary" disabled>Save Product</button>
                    </div>
                </div>

                <div className='coupon-form nice-form'>
                    <h3>Register Coupon Codes</h3>

                    <div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className='controls'>
                    <button type="button" class="btn btn-primary" disabled>Save Coupon</button>
                    </div>
                </div>
            </div>
        </div >
            

    );
}

export default Admin;