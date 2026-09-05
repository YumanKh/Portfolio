import {useState} from "react"

const ContactMe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async() => {
        setStatus("sending");
        
        try{
            // API CALL
            setStatus("success");
        } catch (error) {
            // API CALL
            setStatus("error");
        }
    }

    return(
        <>
            <main className="contact-me-main">
                <div className="contact-me-card">
                    <h3>Contact Me</h3>
                    <h2>Name</h2>
                    <input
                        type="text"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <h2>Email</h2>
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h2>Message</h2>
                    <input 
                        className="message-input"
                        type="text"
                        placeholder="Enter your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className={status === "sending" ? "disabled" : "send-button"} onClick={handleSubmit} disabled={status === "sending"}>
                        Submit
                    </button>
                    {status === "sending" && <p>Sending...</p>}
                    {status === "success" && <p>Message sent successfully.</p>}
                    {status === "error" && <p>Error sending message. Please try again.</p>}
                    
                </div>
            </main>
        </>
    )
}

export default ContactMe