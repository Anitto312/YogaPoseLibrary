import "./css/help.css";

const Help = () => {
    return (
        <div className="help-container">
            <h2>Help & Support</h2>

            <div className="faq">
                <h3>FAQs</h3>
                <p><strong>Q: How do I track my progress?</strong></p>
                <p>A: You can view completed tasks in the Achievement page.</p>

                <p><strong>Q: How do I reset my progress?</strong></p>
                <p>A: Progress reset option will be added soon.</p>
            </div>

            <div className="contact">
                <h3>Contact Support</h3>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Help;
