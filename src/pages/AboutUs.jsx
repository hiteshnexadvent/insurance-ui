import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import './StylePage.css';
import Footer from "../components/Footer";

export default function AboutUs() {
  const [cover, setCover] = useState(null);

  // Simple Counter component with count up animation
  const Counter = ({ target, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const stepTime = 50; // update every 50ms
      const increment = target / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, [target, duration]);

    return (
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700" }}>
        {count}
        {suffix}
      </h1>
    );
  };

  // Fetch cover image on mount
  useEffect(() => {
    const fetchcover = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-coverapi`,
          {
            withCredentials: true,
          }
        );
        setCover(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchcover();
  }, []);

  return (
    <div>
      <div
        id="about"
        style={
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
        }
      >
        <h1 style={{ paddingTop: "300px", fontSize: "4rem", fontWeight: "700" }}>
          About Us
        </h1>
        <h6 style={{ color: "#9fa39a", paddingTop: "20px", paddingBottom: "100px" }}>
          HOME &gt; ABOUT US
        </h6>

        <Navbar></Navbar>
      </div>

      <div className="container gx-0">
        <div className="row mt-5 gx-0">
          
         <div className="col-lg-5 col-md-12 col-12 text-start">
  <h1 style={{ fontSize: "2.5rem", fontWeight: "600", paddingBottom: "20px" }}>
    Impressive Stats and Achievements You Can Trust
  </h1>

  <div className="row mb-4 gx-0">
    <div className="col-6 d-flex align-items-center gap-3">
      <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>
        <Counter target={8} suffix="+"/>
      </div>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Years of <br />Trusted Expertise
      </p>
    </div>
    <div className="col-6 d-flex align-items-center gap-3">
      <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>
        <Counter target={1000} suffix="+" />
      </div>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Successful <br /> Advisors
      </p>
    </div>
  </div>

  <div className="row gx-0">
    <div className="col-6 d-flex align-items-center gap-3">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>5/5</h1>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Advisors <br /> Rating
      </p>
    </div>
    <div className="col-6 d-flex align-items-center gap-3">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>50+</h1>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Locations Served  <br /> Nationwide
      </p>
    </div>
  </div>
</div>


          <div className="col-lg-7 col-md-12 col-12">
            <div style={{ display: "flex", marginLeft: "20px", marginTop: "30px" }}>
              <div
                className="box1"
                style={{
                  height: "300px",
                  width:'50%',
                  marginRight: "20px",
                  borderRadius: "20px",
                  backgroundColor:'#0629a7',
                }}
              >
                
                <div
                  style={{
                    paddingTop: "20px",
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <h4 style={{ color: "white", paddingBottom: "15px" }}>Our Vision</h4>
                  <p style={{ color: "white" }}>
To be India's most trusted and inclusive life insurance network, empowering individuals and securing families' futures.             </p>
                </div>
                <button
                  style={{
                    marginTop: "55px",
                    marginLeft: "120px",
                    border: "2px solid white",
                    borderRadius: "20px",
                    width: "auto",
                    padding: "10px",
                    backgroundColor: "#0629a7",
                    color: "white",
                  }}
                  id="about-btn"
                >
                  Get A Quote
                </button>
              </div>
              <div
                className="box1"
                style={{
                  width:'50%',
                  height: "300px",
                  marginRight: "20px",
                  borderRadius: "20px",
                  backgroundColor: "#575353",
                }}
              >
                
                <div
                  style={{
                    paddingTop: "20px",
                    textAlign: "start",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <h4 style={{ color: "white", paddingBottom: "15px" }}>
                    Our Commitment to Excellence
                  </h4>
                  <p style={{ color: "white" }}>
                    At Diwan Associates, excellence is our standard. We're committed to providing unmatched support, ethical practices, and continuous learning to all our advisors and clients.
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "5px",
                    marginLeft: "120px",
                    border: "2px solid white",
                    borderRadius: "20px",
                    width: "auto",
                    padding: "10px",
                    backgroundColor: "#575353",
                    color: "white",
                  }}
                  id="about-btn1"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className="container">
          <div className="row our" style={{marginTop:'100px'}} >
            <h5 style={{fontWeight:'600',marginBottom:'20px'}}>Our Story</h5>
            <h1>Built on Trust, Driven by Excellence</h1>
            <div className="col-12 our-story">
              <img
                src="/images/about1.jpg"
                alt=""
                style={{
                  width: "100%",
                  borderTopRightRadius: "30px",
                  borderTopLeftRadius: "30px",
                }}
                className="img-fluid mt-4"
              />

              <p
                style={{
                  marginTop: "30px",
                  textAlign: "start",
                  padding: "50px",
                  backgroundColor: "#0629a7",
                  borderBottomRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                  color:'white'
                }}
              >
                At Diwan Associates, our journey began with a simple yet powerful mission—to make life insurance accessible, understandable, and rewarding for every Indian household. Founded over 8 years ago in New Delhi, we recognized a growing need for trustworthy insurance guidance and the lack of structured support for those who wanted to build a career in this field.  wrecognized a growing need for trustworthy insurance guidance and the lack of structured support for those who wanted to build a career in this field.

              </p>
            </div>
          </div>

          <div className="row why" style={{ textAlign: "start",marginTop:'80px' }}>
            <div className="col-lg-6 col-12">
              <h5>Why Choose Us</h5>
              <h2 style={{ marginTop: "20px" ,fontWeight:'700'}}>
               Your Trusted Partner in Life Insurance Advisory
              </h2>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                    marginTop: "30px",
                  }}
                >
                  <i
                    className="fas fa-user-check"
                    style={{
                      fontSize: "2rem",
                      color: "#0629a7",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3> Proven Experience</h3>
                    <p>
                     With over 8 years in the life insurance industry, we bring deep insights, tested strategies, and a reliable track record of success.

                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                  }}
                >
                  <i
                    className="fas fa-tools"
                    style={{
                      fontSize: "2rem",
                      color: "#0629a7",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3> Comprehensive Support System</h3>
                    <p>
                       We guide you from onboarding to certification and beyond, supporting you every step of your career, whether you're new or experienced.

                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                  }}
                >
                  <i
                    className="fas fa-thumbs-up"
                    style={{
                      fontSize: "2rem",
                      color: "#0629a7",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3>IRDAI Exam Assistance:
</h3>
                    <p>
                      We simplify the licensing process with full documentation help, mock tests, and personalized exam training—both online and offline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <h6 style={{lineHeight:'25px'}}>
                At Diwan Associates, we don't just help you succeed in the life insurance industry—we help you build a career with purpose, stability, and long-term growth. We empower you to make a lasting impact while achieving your personal and professional aspirations. Here’s what sets us apart:

              </h6>

              <img
                src="/images/about2.jpg"
                alt=""
                style={{ width: "100%", borderRadius: "20px", marginTop: "40px" }}
              />
            </div>
          </div>

          {/* --------------------------------- image3 start */}

          <div className="row mt-5">
  <div className="col-12 about3 d-flex align-items-center justify-content-center">
    <div className="about3-card text-white text-center p-4 bg-dark bg-opacity-50 rounded" style={{ maxWidth: '600px' }}>
      <h3 className="fw-bold mb-3">Start Your Career Journey Today!</h3>
      <p className="fw-medium">
Ready to build a fulfilling career with purpose? Get started today and experience the Diwan Associates difference.
      </p>
      <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill" style={{ backgroundColor: '#0629a7', border: 'none' }}>
        Book Now
      </button>
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
