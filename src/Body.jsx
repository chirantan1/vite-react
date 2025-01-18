import  { useState } from 'react';
import './Body.css'; // Import the CSS file for styling

function Body() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { text: 'Hello! How can I assist you with your healthcare needs today?', sender: 'bot' }
    ]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            const newMessages = [...messages, { text: message, sender: 'user' }];
            setMessages(newMessages);
            setMessage(''); // Clear input after sending

            // Simulate bot response after a delay
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: 'I am here to help! Can you tell me more about your symptoms?', sender: 'bot' }
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">Healthcare Chatbot</div>
            <div className="chatbot-body">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender}`}
                    >
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={handleMessageChange}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Body;
