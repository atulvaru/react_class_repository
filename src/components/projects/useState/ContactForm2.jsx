import "./ContactForm.css";
import { useState } from "react";

export const ContactForm2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    console.log("Form Data:", formData);
    setTimeout(() => {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <div className="contact-form-page">
      <div className="contact-form-container">
        <div className="accent-blur"></div>
        <div className="form-card">
          <div className="form-head">
            <span className="form-chip">Contact</span>
            <h1>Drop us a message</h1>
            <p>
              Have questions? We’re here to help. Send us a message and we’ll
              get back to you shortly.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm2;
