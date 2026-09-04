const ContactMe = () => {

    return(
        <>
            <main className="contact-me-main">
                <div className="contact-me-card">
                    <h3>Contact Me</h3>
                    <h2>Name</h2>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                    />
                    <h2>Email</h2>
                    <input
                        type="email"
                        placeholder="Enter your email..."
                    />
                    <h2>Message</h2>
                    <input 
                        className="message-input"
                        type="text"
                        placeholder="Enter your message..."
                    />
                    
                </div>
            </main>
        </>
    )
}

export default ContactMe