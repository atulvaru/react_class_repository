import "./ContactForm.css";
import { useState } from "react";

export const ContactForm = () => {
  const [user, setUser] = useState({ name: "", email: "", message: "" });
  const [Loading, setIsLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      name: user.name,
      email: user.email,
      message: user.message,
    };
    console.log("Form Data:", formData);
    setTimeout(() => {
      setIsLoading(false);
      setUser({ name: "", email: "", message: "" }); /// Reset form after submission
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
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                value={user.message}
                onChange={(e) => setUser({ ...user, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" disabled={Loading}>
              {Loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
