import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/contact.css";

function Contact() {
  return (
    <div>
      <div className="shop-main">
        <h1 className="shop-title">Contact Us</h1>
        <ul className="breadcurm">
          <li className="breadcurm-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcurm-item active">Contact Us</li>
        </ul>
      </div>
 
      {/* Contact Form */}
      <div className="contact-section">
        {/* Left Section - Contact Info */}
        <div className="contact-info">
          <h2>📞 Call to Us:</h2>
          <p>We’re available from 10 am – 10 pm EST, 7 days a week.</p>
          <p><strong>Customer Service:</strong> 6-146-389-574</p>
          <p><strong>Careers:</strong> 6-146-389-575</p>
          <hr />

          <h2>✉️ Write to Us:</h2>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p><strong>Customer Service:</strong> customer@example.com</p>
          <p><strong>Careers:</strong> careers@example.com</p>
        </div>

        {/* Right Section - Form */}
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div style={{marginBottom: "100px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28569.243834241424!2d77.70361256152346!3d12.962434921522274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742478347362!5m2!1sen!2sin" width="3000" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>

    </div>
  );
}

export default Contact;
