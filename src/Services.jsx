import { useState } from 'react';
import './services.css'; // Import the CSS file

const Services = () => {
    const [search, setSearch] = useState('');
    const [expanded, setExpanded] = useState(null);

    const services = [
        { category: 'General', name: 'General Medicine', description: 'Primary care, routine check-ups, and treatment for common ailments.', icon: '🩺' },
        { category: 'Child Care', name: 'Pediatrics', description: 'Specialized care for infants, children, and adolescents.', icon: '👶' },
        { category: 'Heart Care', name: 'Cardiology', description: 'Comprehensive heart care and preventive cardiology.', icon: '❤️' },
        { category: 'Bone & Joints', name: 'Orthopedics', description: 'Treatment for bone, joint, and muscle disorders.', icon: '🦴' },
        { category: 'Women’s Health', name: 'Gynecology & Obstetrics', description: 'Prenatal care, childbirth, and gynecological treatment.', icon: '🤰' },
        { category: 'Cancer Care', name: 'Oncology', description: 'Advanced cancer care and treatments.', icon: '🎗️' },
        { category: 'Nervous System', name: 'Neurology', description: 'Treatment for neurological conditions like stroke and epilepsy.', icon: '🧠' },
        { category: 'Imaging', name: 'Radiology', description: 'X-rays, MRIs, CT scans, and ultrasounds.', icon: '📸' },
        { category: 'Emergency', name: 'Emergency & Trauma Care', description: '24/7 immediate medical attention.', icon: '🚨' },
        { category: 'Rehabilitation', name: 'Physiotherapy', description: 'Recovery services for injuries and chronic conditions.', icon: '🏋️‍♂️' },
        { category: 'Diagnostics', name: 'Diagnostics & Pathology', description: 'Laboratory and diagnostic services.', icon: '🔬' },
        { category: 'Medications', name: 'Pharmacy', description: 'On-site pharmacy for medications and supplies.', icon: '💊' },
        { category: 'Dental', name: 'Dental Care', description: 'Preventive care, cosmetic dentistry, and oral surgery.', icon: '🦷' },
        { category: 'Nutrition', name: 'Nutrition & Dietetics', description: 'Dietary consultations for health and wellness.', icon: '🥗' },
    ];

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(search.toLowerCase()) ||
        service.category.toLowerCase().includes(search.toLowerCase())
    );

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    const handleLearnMore = (serviceName) => {
        alert(`Learning more about ${serviceName}`);
    };

    const handleBookAppointment = (serviceName) => {
        alert(`Booking appointment for ${serviceName}`);
    };

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <p>
                Explore our comprehensive range of healthcare services designed to meet your needs.
            </p>

            <input
                type="text"
                className="search-bar"
                placeholder="Search for a service..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="services-list">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-header" onClick={() => toggleExpand(index)}>
                                <span className="service-icon">{service.icon}</span>
                                <h2>{service.name}</h2>
                                <span className="expand-icon">{expanded === index ? '-' : '+'}</span>
                            </div>
                            {expanded === index && (
                                <div className="service-details">
                                    <p>{service.description}</p>
                                    <button 
                                        className="learn-more-button" 
                                        onClick={() => handleLearnMore(service.name)}
                                    >
                                        Learn More
                                    </button>
                                    <button 
                                        className="book-appointment-button" 
                                        onClick={() => handleBookAppointment(service.name)}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No services found. Try searching for something else.</p>
                )}
            </div>
        </div>
    );
};

export default Services;
