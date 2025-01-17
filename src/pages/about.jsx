import './styles/about.css';

function About() {
    return (
        <div className="about page">
            {/* Header Section */}
            <header className="about-header">
                <h1>About Us</h1>
                <p>
                    Welcome to Sports Essentials – your one-stop shop for all the equipment you need to perform your best.
                    We specialize in providing top-quality gear and training essentials to help you excel in every game, practice, or workout.
                </p>
            </header>

            {/* Mission Statement */}
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    At Sports Essentials, our mission is to empower athletes and fitness enthusiasts of all levels with the tools they need to succeed. 
                    We believe in making high-quality sports equipment accessible, affordable, and tailored to the unique needs of our customers.
                </p>
            </section>

            {/* Core Values */}
            <section className="values">
                <h2>Our Core Values</h2>
                <ul>
                    <li>
                        <strong>Innovation:</strong> We bring you the latest advancements in sports technology and design.
                    </li>
                    <li>
                        <strong>Quality First:</strong> We offer only the best products from trusted brands to ensure durability and performance.
                    </li>
                    <li>
                        <strong>Affordability:</strong> Competitive prices make it easier for everyone to access great gear.
                    </li>
                    <li>
                        <strong>Customer Focus:</strong> Your satisfaction is our priority. We provide personalized recommendations and outstanding customer service.
                    </li>
                </ul>
            </section>

            {/* Featured Products */}
            <section className="featured-products">
                <h2>Only The Essentials</h2>
                <p>
                    Whether you're looking for training equipment, apparel, or accessories, we’ve got you covered. Some of our most popular categories include:
                </p>
                <ul>
                    <li>Sports Essentials</li>
                    <li>Athletic and Casual Shoes</li>
                    <li>Fitness and Sports Equipment</li>
                    <li>Sports Gear</li>
                    <li>Outdoor Recreation Products</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="contact">
                <h2>Contact Us</h2>
                <p>
                    <strong>Jose Torres</strong><br />
                    Email: <a href="">myemail@sdgku.edu</a><br />
                    Phone: (555) 123-4567<br />
                    Address: 123 Sports Essentials Lot, Alexandria, VA
                </p>
            </section>
        </div>
    );
}

export default About;