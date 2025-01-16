import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Healthcare Chatbot</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Appointment">Appointment</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/Doctors">Doctors</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
