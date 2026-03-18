import "./RegistrationReactN.css";
import { useState } from "react";
export const RegistrationReactN = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [id]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", user);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleFormSubmit}>
        <section className="display-section">
          <h2>Entered Information:</h2>
          <p>
            Hello My name is {user.firstName} {user.lastName} and my email is{" "}
            {user.email} and my phone number is {user.phone}
          </p>
        </section>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={user.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group"></div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
