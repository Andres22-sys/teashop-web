import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact container">
            <span className="eyebrow">Get In Touch</span>
            <h2>Contact Us</h2>
            <p className="contact-intro">Questions about a blend, an order, or a visit? We&#39;d love to hear from you.</p>
            <p className="contact-ctas">
                <a className="btn" href="mailto:contact@theteacozy.com">Email Us</a>
                <a className="btn btn-outline" href="tel:+19175558904">Call</a>
            </p>
        </section>
    );
};

export default Contact;
