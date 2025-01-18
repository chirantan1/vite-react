import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './home.jsx';
import Appointment from './Appointment.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Doctors from './DoctorProfile.jsx';

function App() {
    return (
        <Router basename='/vite-react'>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors" element={<Doctors />} /> {/* Fixed Router to Route */}
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
