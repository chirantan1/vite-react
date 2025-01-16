import { useState } from "react";
import "./Appointment.css";

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        notes: "",
        paymentMethod: "",
        cardDetails: "",
    });

    const doctors = [
        { value: "general", label: "Dr. John Doe (General Physician)" },
        { value: "pediatrician", label: "Dr. Sarah Lee (Pediatrician)" },
        { value: "dentist", label: "Dr. Mark Smith (Dentist)" },
        { value: "cardiologist", label: "Dr. Emily Brown (Cardiologist)" },
        { value: "neurologist", label: "Dr. David Wilson (Neurologist)" },
        { value: "dermatologist", label: "Dr. Rachel Adams (Dermatologist)" },
        { value: "orthopedist", label: "Dr. Lisa Turner (Orthopedist)" },
        { value: "gynecologist", label: "Dr. Olivia Green (Gynecologist)" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Appointment booked successfully!");
    };

    return (
        <div className="container">
            <h1 className="header">Doctor Appointment Booking</h1>
            <form onSubmit={handleSubmit} className="form">
                {/* Personal Details */}
                <label className="label" htmlFor="name">
                    Full Name:
                </label>
                <input
                    className="input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label className="label" htmlFor="email">
                    Email Address:
                </label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label className="label" htmlFor="phone">
                    Phone Number:
                </label>
                <input
                    className="input"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                {/* Appointment Details */}
                <label className="label" htmlFor="doctor">
                    Select Doctor:
                </label>
                <select
                    className="input"
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                >
                    <option value="">Choose a doctor</option>
                    {doctors.map((doctor) => (
                        <option key={doctor.value} value={doctor.value}>
                            {doctor.label}
                        </option>
                    ))}
                </select>

                <label className="label" htmlFor="date">
                    Appointment Date:
                </label>
                <input
                    className="input"
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label className="label" htmlFor="time">
                    Preferred Time:
                </label>
                <input
                    className="input"
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />

                <label className="label" htmlFor="notes">
                    Additional Notes:
                </label>
                <textarea
                    className="textarea"
                    id="notes"
                    name="notes"
                    placeholder="Any specific concerns or requirements"
                    rows="4"
                    value={formData.notes}
                    onChange={handleChange}
                ></textarea>

                {/* Payment Section */}
                <h2 className="sectionHeader">Payment Details</h2>
                <label className="label" htmlFor="amount">
                    Amount:
                </label>
                <input
                    className="input"
                    type="text"
                    id="amount"
                    name="amount"
                    value="$100"
                    readOnly
                />

                <div className="paymentMethods">
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="credit_card"
                            onChange={handleChange}
                            required
                        />
                        Credit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="debit_card"
                            onChange={handleChange}
                        />
                        Debit Card
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            onChange={handleChange}
                        />
                        PayPal
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            onChange={handleChange}
                        />
                        Cash
                    </label>
                </div>

                {(formData.paymentMethod === "credit_card" ||
                    formData.paymentMethod === "debit_card") && (
                    <div>
                        <label className="label" htmlFor="cardDetails">
                            Card Details:
                        </label>
                        <input
                            className="input"
                            type="text"
                            id="cardDetails"
                            name="cardDetails"
                            placeholder="Card Number"
                            value={formData.cardDetails}
                            onChange={handleChange}
                        />
                    </div>
                )}

                {/* Submit Button */}
                <button type="submit" className="button">
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default Appointment;
