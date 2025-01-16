import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import doctor1Img from './assets/doctor1.jpg';
import doctor2Img from './assets/doctor2.jpg';
import doctor3Img from './assets/doctor3.jpg';
import doctor4Img from './assets/doctor4.jpg';
import './DoctorProfiles.css';

const Doctors = () => {
    const [search, setSearch] = useState('');
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const doctors = [
        {
            name: "Dr. John Doe",
            specialty: "General Physician",
            experience: "10 years",
            image: doctor1Img,
        },
        {
            name: "Dr. Sarah Lee",
            specialty: "Pediatrician",
            experience: "8 years",
            image: doctor2Img,
        },
        {
            name: "Dr. Mark Smith",
            specialty: "Dentist",
            experience: "12 years",
            image: doctor3Img,
        },
        {
            name: "Dr. Emily Brown",
            specialty: "Cardiologist",
            experience: "15 years",
            image: doctor4Img,
        },
    ];

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
    );

    const addToFavorites = (doctor) => {
        setFavorites((prevFavorites) => {
            const existingDoctor = prevFavorites.find((item) => item.name === doctor.name);
            if (!existingDoctor) {
                return [...prevFavorites, doctor];
            }
            return prevFavorites;
        });
    };

    const handleScheduleAppointment = () => {
        // Navigate to the Appointment page
        navigate('/appointment');
    };

    return (
        <div className="doctors-container">
            <h1>Find a Doctor</h1>
            <p>Search for doctors in different specialties and book your appointment online.</p>

            <input
                type="text"
                className="search-bar"
                placeholder="Search for a doctor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                        <div className="doctor-item" key={index}>
                            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                            <div className="doctor-details">
                                <h2>{doctor.name}</h2>
                                <p className="specialty">Specialty: {doctor.specialty}</p>
                                <p className="experience">Experience: {doctor.experience}</p>
                                <button className="favorite-button" onClick={() => addToFavorites(doctor)}>
                                    Add to Favorites
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No doctors found.</p>
                )}
            </div>

            <div className="favorites-section">
                <h2>Your Favorites</h2>
                {favorites.length > 0 ? (
                    <div className="favorites-list">
                        {favorites.map((doctor, index) => (
                            <div className="favorite-item" key={index}>
                                <img src={doctor.image} alt={doctor.name} className="favorite-image" />
                                <div className="favorite-details">
                                    <h3>{doctor.name}</h3>
                                    <p>{doctor.specialty}</p>
                                </div>
                            </div>
                        ))}
                        <button className="schedule-appointment-button" onClick={handleScheduleAppointment}>
                            Schedule Appointment
                        </button>
                    </div>
                ) : (
                    <p>No doctors added to favorites.</p>
                )}
            </div>
        </div>
    );
};

export default Doctors;
