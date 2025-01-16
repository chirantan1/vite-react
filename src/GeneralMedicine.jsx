import './generalMedicine.css';
import { useState } from 'react';
import paracetamolImg from './assets/paracetamol.jpg';
import ibuprofenImg from './assets/ibuprofen.jpg';
import amoxicillinImg from './assets/Amoxiain.jpeg'
import coughSyrupImg from './assets/koflet.jpg'
import vitaminCTabletsImg from './assets/Vitamin.jpg';
import antacidTabletsImg from './assets/Antacid.jpg';
import orsImg from './assets/ors.jpg';
import cetirizineImg from './assets/cetirizine.jpg';
import metforminImg from './assets/metformin.jpg';
import lisinoprilImg from './assets/antiseptic-cream.jpg';
import multiprexImg from './assets/multiprex.jpg';
import moovImg from './assets/moov.jpg';
import sodiumImg from './assets/sodium_chol.jpg';
import loperImg from './assets/loperamide.jpg';
import fourdermImg from './assets/FOURDERM.jpg';
import hydroImg from './assets/Hydrocortisone.jpeg';
import calciumImg from './assets/calcium.jpg';
import accuImg from './assets/ACCU-CHEK.jpg';
import asthaImg from './assets/asthalin.jpg';
import sopeImg from './assets/sope.jpg';

const BuyMedicine = () => {
    const [search, setSearch] = useState('');
    const [cart, setCart] = useState([]);
    const [isDelivering, setIsDelivering] = useState(false); // State to trigger delivery animation
    const [deliveryComplete, setDeliveryComplete] = useState(false); 
    const medicines = [
        {
            name: "Paracetamol 500mg",
            description: "Effective relief for fever and mild pain.",
            price: "30",
            image: paracetamolImg,


        },
        {
            name: "Ibuprofen 400mg",
            description: "Pain reliever and anti-inflammatory medication.",
            price: "50",
            image: ibuprofenImg,
        },
        {
            name: "Amoxicillin 250mg",
            description: "Antibiotic for bacterial infections.",
            price: "120",
            image: amoxicillinImg,
        },
        {
            name: "Cough Syrup",
            description: "Soothes throat irritation and relieves cough.",
            price: "80",
            image: coughSyrupImg,
        },
        {
            name: "Vitamin C Tablets",
            description: "Boosts immunity and prevents scurvy.",
            price: "150",
            image: vitaminCTabletsImg,
        },
        {
            name: "Antacid Tablets",
            description: "Relieves acidity, heartburn, and indigestion.",
            price: "40",
            image: antacidTabletsImg,
        },
        {
            name: "ORS (Oral Rehydration Salts)",
            description: "Restores electrolytes and prevents dehydration.",
            price: "20",
            image: orsImg,
        },
        {
            name: "Cetirizine 10mg",
            description: "Relieves allergy symptoms like sneezing and itching.",
            price: "25",
            image: cetirizineImg,
        },
        {
            name: "Metformin 500mg",
            description: "Used for managing type 2 diabetes.",
            price: "60",
            image: metforminImg,
        },
        {
            name: "Antiseptic Cream",
            description: "For minor cuts, wounds, and burns.",
            price: "45",
            image: lisinoprilImg,
        },
        {
            name: "Multivitamin Capsules",
            description: "Supports overall health and nutrition.",
            price: "200",
            image: multiprexImg,
        },
        {
            name: "Diclofenac Gel",
            description: "Topical gel for muscle and joint pain.",
            price: "90",
            image: moovImg,
        },
        {
            name: "Saline Nasal Spray",
            description: "Clears nasal congestion and moisturizes nasal passages.",
            price: "120",
            image: sodiumImg,
        },
        {
            name: "Loperamide 2mg",
            description: "Treats diarrhea by slowing bowel movement.",
            price: "35",
            image: loperImg,
        },
        {
            name: "Antifungal Cream",
            description: "Treats fungal infections like athlete's foot and ringworm.",
            price: "85",
            image: fourdermImg,
        },
        {
            name: "Hydrocortisone Cream",
            description: "Relieves skin irritation, itching, and inflammation.",
            price: "60",
            image: hydroImg,
        },
        {
            name: "Calcium Tablets",
            description: "Strengthens bones and prevents calcium deficiency.",
            price: "120",
            image: calciumImg,
        },
        {
            name: "Glucometer Test Strips",
            description: "Used to monitor blood glucose levels.",
            price: "500",
            image: accuImg,
        },
        {
            name: "Inhaler (Salbutamol)",
            description: "Relieves asthma and bronchospasm symptoms.",
            price: "200",
            image: asthaImg,
        },
        {
            name: "Antibacterial Soap",
            description: "Kills germs and prevents infections.",
            price: "40",
            image: sopeImg,
        }
    ];
    
    

    const filteredMedicines = medicines.filter((medicine) =>
        medicine.name.toLowerCase().includes(search.toLowerCase())
    );

    const addToCart = (medicine) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.name === medicine.name);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.name === medicine.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...medicine, quantity: 1 }];
        });
    };

    const removeFromCart = (medicineName) => {
        setCart((prevCart) =>
            prevCart.filter((item) => item.name !== medicineName)
        );
    };

    const updateQuantity = (medicineName, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.name === medicineName
                    ? { ...item, quantity: Math.max(1, quantity) }
                    : item
            )
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        setIsDelivering(true); // Trigger the delivery animation
        setTimeout(() => {
            setIsDelivering(false); // Stop animation
            setDeliveryComplete(true); // Set delivery as complete
        }, 3000); // Delivery process time, can adjust
    };

    return (
        <div className="buy-medicine-container">
            <h1>Buy Medicines</h1>
            <p>Explore our range of quality medicines and order online for fast delivery.</p>

            <input
                type="text"
                className="search-bar"
                placeholder="Search for a medicine..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="medicine-list">
                {filteredMedicines.length > 0 ? (
                    filteredMedicines.map((medicine, index) => (
                        <div className="medicine-item" key={index}>
                            <img src={medicine.image} alt={medicine.name} className="medicine-image" />
                            <h2>{medicine.name}</h2>
                            <p>{medicine.description}</p>
                            <p className="price">Price: ₹{medicine.price}</p>
                            <button className="buy-button" onClick={() => addToCart(medicine)}>
                                Add to Cart
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No medicines found.</p>
                )}
            </div>

            <div className="cart-section">
                <h2>Your Cart</h2>
                {cart.length > 0 ? (
                    <div className="cart-items">
                        {cart.map((item, index) => (
                            <div className="cart-item" key={index}>
                                <img src={item.image} alt={item.name} className="cart-image" />
                                <div className="cart-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className="remove-button" onClick={() => removeFromCart(item.name)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <h3>Total: ₹{calculateTotal()}</h3>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            {/* Delivery Animation */}
            {isDelivering && (
                <div className="delivery-animation">
                    <p>Processing delivery...</p>
                    <div className="loading-spinner"></div>
                </div>
            )}

            {/* Delivery Complete Message */}
            {deliveryComplete && !isDelivering && (
                <div className="delivery-complete">
                    <p>Your order is on its way! 🚚</p>
                </div>
            )}
        </div>
    );
};

export default BuyMedicine;