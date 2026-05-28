import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact container">
            <h2>Contact Us</h2>
            <p className="contact-ctas">
                <a className="btn" href="mailto:contact@theteacozy.com">Email Us</a>
                <a className="btn" href="tel:+19175558904">Call</a>
            </p>
        </section>
    );
};

export default Contact;
