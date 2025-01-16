import './contact.css'; // Assuming you'll create a CSS file for styling

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <h2>We had love to hear from you! Reach out to any of our team members for more information.</h2>

            <div className="team-members">
                <div className="team-member">
                    <h2>Raj Biswas</h2>
                    <p>Email: <a href="mailto:raj@gmail.com">raj@gmail.com</a></p>
                    <p>PH NO: +919062123433</p>
                </div>

                <div className="team-member">
                    <h2>Ayan Jyoti</h2>
                    <p>Email: <a href="mailto:ayan17@gmail.com">ayan17@gmail.com</a></p>
                </div>
                <div className="team-member">
                    <h2>Ayan Majumder</h2>
                    <p>Email: <a href="mailto:ayan@gmail.com">ayan@gmail.com</a></p>
                </div>
                <div className="team-member">
                    <h2>Swastik Sanyal</h2>
                    <p>Email: <a href="mailto:swastik@gmail.com">swastik@gmail.com</a></p>
                </div>
                <div className="team-member">
                    <h2>Chirantan Jana</h2>
                    <p>Email: <a href="mailto:chirantan@gmail.com">chirantan@gmail.com</a></p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
