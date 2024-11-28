import "./Location.css";

const Locations = () => {
    return (
        <section className="locations" id="locations">
            <h2>Our Locations</h2>
            <div className="places">
                <div className="location">
                    <h3>Downtown</h3>
                    <p>384 West 4th St, Suite 108</p>
                    <p>Portland, Maine</p>
                </div>
                <div className="location">
                    <h3>East Bayside</h3>
                    <p>5th Avenue, Northwest Corner</p>
                    <p>Portland, Maine</p>
                </div>
                <div className="location">
                    <h3>Oakdale</h3>
                    <p>123 Lane, Second Floor</p>
                    <p>Portland, Maine</p>
                </div>
            </div>
        </section>
    );
};

export default Locations;
