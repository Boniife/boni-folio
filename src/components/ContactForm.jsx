import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiCheck, FiCopy, FiSend } from "react-icons/fi";
import Heading from "./Heading";
import socials from "../content/socials";

const ContactForm = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailAddress = "anyanwuifeanyi3@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="section-container" id="contact">
      <Heading
        eyebrow="Get In Touch"
        firstWord="Let's"
        secondWord="Connect"
        subtitle="Have an opportunity, project inquiry, or technical role? I'd love to hear from you."
      />

      <div className="contact-layout">
        {/* Left: Contact Channels */}
        <div className="contact-info-panel">
          <h3>Let&apos;s talk about your next project</h3>
          <p>
            I am currently open to full-time engineering roles, high-impact contract work,
            and exciting collaboration opportunities worldwide.
          </p>

          <div className="contact-direct-items">
            {/* Email Channel */}
            <div className="direct-channel-card">
              <div className="direct-icon">
                <FiMail />
              </div>
              <div className="direct-content">
                <div className="direct-label">Email Address</div>
                <a href={`mailto:${emailAddress}`} className="direct-value">
                  {emailAddress}
                </a>
              </div>
              <button
                className="btn-copy-email"
                onClick={handleCopyEmail}
                type="button"
                title="Copy email to clipboard"
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>

            {/* Phone Channel */}
            <div className="direct-channel-card">
              <div className="direct-icon">
                <FiPhone />
              </div>
              <div className="direct-content">
                <div className="direct-label">Phone & WhatsApp</div>
                <a href="tel:+2348105080543" className="direct-value">
                  +234 810 508 0543
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="direct-channel-card">
              <div className="direct-icon">
                <FiMapPin />
              </div>
              <div className="direct-content">
                <div className="direct-label">Location</div>
                <div className="direct-value">Lagos, Nigeria (Remote Ready)</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "24px" }}>
            <div className="direct-label" style={{ marginBottom: "12px" }}>
              Find me on social platforms:
            </div>
            <div className="hero-socials-strip" style={{ justifyContent: "flex-start" }}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="hero-social-link"
                  target="_blank"
                  rel="noreferrer"
                  title={social.name}
                >
                  <img src={`/socials/${social.icon}`} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Modern Contact Form */}
        <div className="contact-form-panel">
          {formSubmitted ? (
            <div style={{
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "14px",
              padding: "40px 24px",
              textAlign: "center"
            }}>
              <FiCheck style={{ fontSize: "3rem", color: "#10b981", marginBottom: "16px" }} />
              <h4 style={{ fontSize: "1.4rem", color: "#fff", marginBottom: "10px" }}>
                Message Sent Successfully!
              </h4>
              <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
                Thank you for reaching out. I will respond to your inquiry as soon as possible.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <label htmlFor="senderName">Your Name</label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  className="form-input"
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="senderEmail">Email Address</label>
                <input
                  type="email"
                  id="senderEmail"
                  name="senderEmail"
                  className="form-input"
                  placeholder="alex@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject / Project Type</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Frontend Engineer role / Web Project"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about your team, project requirements, or opportunity..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit-message">
                <FiSend /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {copied && (
        <div className="toast-notice">
          <FiCheck /> Email copied to clipboard!
        </div>
      )}
    </section>
  );
};

export default ContactForm;
