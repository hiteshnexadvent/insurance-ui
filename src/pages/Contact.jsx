import React from "react";
import Navbar from "../components/Navbar";
import "../components/Stylemid.css";
import PageFooter from "./PageFooter";

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>

      <div className="container-fluid" id="contact">
        <div className="row">
          <div className="col-12">
            <h1
              style={{
                marginTop: "130px",
                fontWeight: "700",
                fontSize: "4rem",
              }}
            >
              Contact
            </h1>
            <h6 style={{ color: "#9fa39a" }}>HOME &gt; CONTACT</h6>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px",textAlign:'start' }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 ">
            <form
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              {/* Full Name */}
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <label
                  htmlFor="fullName"
                  style={{
                    fontWeight: "500",
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 10px",
                    border: "1px solid #ccc",
                    borderBottom: "1px solid #ccc", // Highlighted bottom border
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />

                <i
                  className="fas fa-user"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    color: "#aaa",
                  }}
                ></i>
              </div>

              {/* Email */}
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontWeight: "500",
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 10px",
                    border: "1px solid #ccc",
                    borderBottom: "1px solid #ccc", // Highlighted bottom border
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
                <i
                  className="fas fa-envelope"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    color: "#aaa",
                  }}
                ></i>
              </div>

              {/* Subject */}
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <label
                  htmlFor="subject"
                  style={{
                    fontWeight: "500",
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 10px",
                    border: "1px solid #ccc",
                    borderBottom: "1px solid #ccc", // Highlighted bottom border
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                />
                <i
                  className="fas fa-edit"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    color: "#aaa",
                  }}
                ></i>
              </div>

              {/* Message */}
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <label
                  htmlFor="message"
                  style={{
                    fontWeight: "500",
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                  required
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 10px",
                    resize: "none",
                    border: "1px solid #ccc",
                    borderBottom: "1px solid #ccc", // Highlighted bottom border
                    borderRadius: "5px",
                    boxSizing: "border-box",
                    outline: "none",
                  }}
                ></textarea>
                <i
                  className="fas fa-comment-dots"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    color: "#aaa",
                  }}
                ></i>
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{ padding: "10px 30px", fontWeight: "bold" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div
            className="col-lg-6 col-md-6 col-12"
            style={{ textAlign: "start", paddingTop: "20px" }}
          >
            <h3 style={{ color: "#019785", textDecoration: "underline" }}>
              Contact Info to
            </h3>
            <h1 style={{ fontWeight: "700" }}>Reach Our Expert Team</h1>
            <p style={{ color: "#636161" }}>
              Send a message through given form, If your enquiry is time <br />
              sensitive please use below contact details.
            </p>

            {/* Address Box */}
            <div
              className="box1"
              style={{
                border: "1px solid #c5bbbb",
                width: "100%",
                padding: "10px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <h5>
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    marginRight: "12px",
                    color: "#019785",
                    fontSize: "20px",
                  }}
                ></i>
                Post Address
              </h5>
              <p style={{ color: "#636161" }}>
                280 Granite Run Drive Suite #200 Lancaster, PA 1760
              </p>
            </div>

            {/* General Enquiries Box */}
            <div
              className="box2"
              style={{
                border: "1px solid #c5bbbb",
                width: "100%",
                padding: "10px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <h5>
                <i
                  className="fas fa-phone"
                  style={{
                    marginRight: "12px",
                    color: "#019785",
                    fontSize: "20px",
                  }}
                ></i>
                General Enquiries
              </h5>
              <p style={{ color: "#636161" }}>
                Phone: +98 060 712 34 & Email: sendmail@qetus.com
              </p>
            </div>

            {/* Operation Hours Box */}
            <div
              className="box3"
              style={{
                border: "1px solid #c5bbbb",
                width: "100%",
                padding: "10px",
                marginTop: "20px",
                borderRadius: "10px",
              }}
            >
              <h5>
                <i
                  className="fas fa-clock"
                  style={{
                    marginRight: "12px",
                    color: "#019785",
                    fontSize: "20px",
                  }}
                ></i>
                Operation Hours
              </h5>
              <p style={{ color: "#636161" }}>
                Mon-Saturday: 09.00 to 07.00 (Sunday: Closed)
              </p>
            </div>
          </div>
        </div>
          </div>
          
          {/* ---------------------------- map */}

          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div style={{ width: '100%', height: '400px',marginTop:'40px' }}>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.528062285756!2d-122.41941548468199!3d37.77492927975902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74c913e3%3A0xd71a6c7dc827a87!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
    width="100%"
    height="80%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                  </div>
              </div>
          </div>

        


          <PageFooter></PageFooter>

    </div>
  );
}
