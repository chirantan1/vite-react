
const Home = () => {
    return (
        <div className="chatbot-container">
        <div className="chatbot-header">
            Chatbot
        </div>
        <div className="chatbot-body">
            <div className="message bot">
                <p>Hello! How can I assist you with your healthcare needs today?</p>
            </div>
        </div>
        <div className="chatbot-input">
            <input type="text" placeholder="Type your message here..." />
            <button>Send</button>
        </div>
    </div>
    );
};

export default Home;