import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../components/Stylemid.css";
import axios from "axios";
import Swal from 'sweetalert2';
import Footer from "../components/Footer";

export default function Contact() {

  let [formData, setFormData] = useState({ name: '', email: '', mobile:'',city: '', message: '' });
  const [loading, setLoading] = useState(false);

  const [cover, setCover] = useState(null);


  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/admin/user-details`, formData,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials:true
        }
      )

      Swal.fire({
    title: 'Success!',
    text: 'User registered successfully.',
    icon: 'success',
    confirmButtonColor: '#3085d6'
  });

      setFormData({
      name: '',
      email: '',
      mobile: '',
      city: '',
      message: ''
      });
      console.log(response);

      
    }
    catch (error) {
  if (error.response) {
    Swal.fire({
      title: 'Error!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonColor: '#d33'
    });
  } else {
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonColor: '#d33'
    });
  }
} finally {
    setLoading(false);
  }
  }


  
    useEffect(() => {
  
      const fetchcover=async () => {
        try {
          const res=await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-coverapi`,
            {
              withCredentials: true,
            })
          setCover(res.data);
        }
         catch (err) {
          console.log(err);
        }
      }
  
      fetchcover();
  
    }, []);


  return (
    <div>
      
      <div id="blogs"  style={
          cover && cover.image
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${process.env.REACT_APP_BACKEND_API_URL}${cover.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "auto",
                color: "white",
              }
            : {
                backgroundColor: "#000", // fallback style
                minHeight: "auto",
                color: "white",
              }
        }>
              <h1
                style={{ paddingTop: "300px", fontSize: "4rem", fontWeight: "700" }}
              >
                Contact
              </h1>
              <h6
                style={{
                  color: "#9fa39a",
                  paddingTop: "20px",
                  paddingBottom: "100px",
                }}
              >
                HOME &gt; CONTACT
              </h6>
      
              <Navbar></Navbar>
            </div>
          

      {/* ---------------------------------- form */}

      <div className="container" style={{ marginTop: "40px",textAlign:'start' }}>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12 contact-form">
            


            <form onSubmit={handleSubmit}
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
                height: 'auto',
                lineHeight:'20px'
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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

              
               {/* Mobile */}
              <div style={{ marginBottom: "20px", position: "relative" }}>
                <label
                  htmlFor="email"
                  style={{
                    fontWeight: "500",
                    marginBottom: "5px",
                    display: "block",
                  }}
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
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
                  className="fas fa-phone"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "38px",
                    color: "#aaa",
                  }}
                ></i>
              </div>

              

              

              {/* city */}

             <div style={{ marginBottom: "20px", position: "relative" }}>
  <label
    htmlFor="city"
    style={{
      fontWeight: "500",
      marginBottom: "5px",
      display: "block",
    }}
  >
    City
  </label>
  <select
    id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
    required
    defaultValue=""
    style={{
      width: "100%",
      padding: "10px 40px 10px 10px",
      border: "1px solid #ccc",
      borderBottom: "1px solid #ccc",
      borderRadius: "5px",
      boxSizing: "border-box",
      outline: "none",
      appearance: "none",
      backgroundColor: "#fff",
    }}
  >
    <option value="" disabled hidden></option>
    <option value="Assam">Assam</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Delhi">Delhi</option>
    <option value="Bangalore">Bangalore</option>
    <option value="Hyderabad">Hyderabad</option>
    <option value="Chennai">Chennai</option>
    <option value="Kolkata">Kolkata</option>
    <option value="Pune">Pune</option>
    <option value="Haryana">Haryana</option>
    <option value="Punjab">Punjab</option>
    <option value="Kerala">Kerala</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Odisha">Odisha</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
  </select>
  <i
    className="fas fa-chevron-down"
    style={{
      position: "absolute",
      right: "10px",
      top: "38px",
      color: "#aaa",
      pointerEvents: "none",
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
  className="btn"
  style={{ padding: "10px 30px", fontWeight: "bold", width: '100%',backgroundColor:'#0629a7',color:'white' }}
  disabled={loading}
>
  {loading ? (
    <>
      <i className="fas fa-spinner fa-spin" style={{ marginRight: "8px" }}></i>
      Submitting...
    </>
  ) : (
    "Submit"
  )}
</button>


              </div>
            </form>






          </div>

          <div
            className="col-lg-6 col-md-6 col-12 contact-info"
            style={{ textAlign: "start"  }}
          >
            <h3 style={{ color: "#0629a7",fontWeight:'600' }}>
              Contact Info to
            </h3>
            <h1 style={{ fontWeight: "700",paddingTop:'40px' }}>Reach Our Expert Team</h1>
            <p style={{ color: "#636161",paddingTop:'2px' }}>
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
                marginTop: "40px",
                borderRadius: "10px",
              }}
            >
              <h5>
                <i
                  className="fas fa-map-marker-alt"
                  style={{
                    marginRight: "12px",
                    color: "#0629a7",
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
                marginTop: "40px",
                borderRadius: "10px",

              }}
            >
              <h5>
                <i
                  className="fas fa-phone"
                  style={{
                    marginRight: "12px",
                    color: "#0629a7",
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
                marginTop: "40px",
                borderRadius: "10px",
              }}
            >
              <h5>
                <i
                  className="fas fa-clock"
                  style={{
                    marginRight: "12px",
                    color: "#0629a7",
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

          <div className="container gx-0">
              <div className="row mt-4 gx-0">
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

      <div style={{marginTop:'50px'}}>
              <Footer></Footer>
            </div>
    
    </div>
  );
}
