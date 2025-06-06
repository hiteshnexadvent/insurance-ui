import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import PageFooter from "./PageFooter";
import './StylePage.css';

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
        <Counter target={12} />
      </div>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Years in <br /> Business
      </p>
    </div>
    <div className="col-6 d-flex align-items-center gap-3">
      <div style={{ fontSize: "2.5rem", fontWeight: "700" }}>
        <Counter target={700} suffix="+" />
      </div>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Projects <br /> Completed
      </p>
    </div>
  </div>

  <div className="row gx-0">
    <div className="col-6 d-flex align-items-center gap-3">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>5/5</h1>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Clients <br /> Happiness
      </p>
    </div>
    <div className="col-6 d-flex align-items-center gap-3">
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", margin: 0 }}>100+</h1>
      <p className="mb-0" style={{ lineHeight: "1.3" }}>
        Service Coverage <br /> Area
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
                  width: "45%",
                  marginRight: "20px",
                  borderRadius: "20px",
                  backgroundColor: "#019785",
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
                  <h4 style={{ color: "white", paddingBottom: "15px" }}>Our Vision for Your Home</h4>
                  <p style={{ color: "white" }}>
                    To be the most trusted and preferred handyman service provider
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "70px",
                    marginLeft: "120px",
                    border: "2px solid white",
                    borderRadius: "20px",
                    width: "auto",
                    padding: "10px",
                    backgroundColor: "#019785",
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
                  height: "300px",
                  width: "45%",
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
                    To provide top-quality handyman services that exceed our clients’ expectations
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "47px",
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
          <div className="row" style={{marginTop:'100px'}}>
            <h5 style={{fontWeight:'600',marginBottom:'20px'}}>Our Story</h5>
            <h1>Quality Services for All Your Home Repair Needs</h1>
            <div className="col-12">
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
                  backgroundColor: "#019785",
                  borderBottomRightRadius: "30px",
                borderBottomLeftRadius: "30px",
                  color:'white'
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                repellendus animi voluptates suscipit quae nemo eligendi dignissimos
                eos iure officia ducimus architecto maxime assumenda eveniet.
                Nihil reprehenderit vel, rem quidem esse harum repellat recusandae
                voluptas in ipsum asperiores, voluptatibus fugit consequuntur
                officiis aut earum dolorum similique deserunt aliquam beatae
                voluptates dignissimos ducimus delectus ex! Corporis amet tenetur
                similique quis veniam quam, dolorem, facere dolorum sequi fugit
                quidem voluptates suscipit eaque aliquam neque animi. Laudantium
                hic ipsam ea itaque aspernatur maiores quaerat dolorum laborum natus
                necessitatibus?
              </p>
            </div>
          </div>

          <div className="row" style={{ textAlign: "start",marginTop:'80px' }}>
            <div className="col-lg-6 col-12">
              <h5>Why Choose Us</h5>
              <h2 style={{ marginTop: "20px" }}>
                We're the Best Choice for Your Handyman Needs
              </h2>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "30px",
                    marginTop: "50px",
                  }}
                >
                  <i
                    className="fas fa-user-check"
                    style={{
                      fontSize: "2rem",
                      color: "#019785",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3>Experienced Professionals</h3>
                    <p>
                      Our team is made up of skilled and certified handymen with
                      extensive experience across various trades.
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
                      color: "#019785",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3>Skilled Technicians</h3>
                    <p>
                      Experts in plumbing, electrical, carpentry, and more to
                      handle any task with precision.
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
                      color: "#019785",
                      marginRight: "20px",
                      marginTop: "5px",
                    }}
                  ></i>
                  <div>
                    <h3>Customer Satisfaction</h3>
                    <p>
                      Client happiness is our top priority. We deliver quality,
                      always.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <h6 style={{lineHeight:'25px'}}>
                At Fixit, we understand that your home is your sanctuary, and
                we’re committed to keeping it in top shape. Here’s why we’re the
                best choice for all your handyman needs:
              </h6>

              <img
                src="/images/about2.jpg"
                alt=""
                style={{ width: "100%", borderRadius: "20px", marginTop: "55px" }}
              />
            </div>
          </div>

          {/* --------------------------------- image3 start */}

          <div className="row mt-5">
  <div className="col-12 about3 d-flex align-items-center justify-content-center">
    <div className="text-white text-center p-4 bg-dark bg-opacity-50 rounded" style={{ maxWidth: '600px' }}>
      <h3 className="fw-bold mb-3">Get Your Free Estimate Today!</h3>
      <p className="fw-medium">
        Get started on your project today and experience the difference <br />
        our team can make
      </p>
      <button className="btn btn-primary mt-3 px-4 py-2 rounded-pill" style={{ backgroundColor: '#019785', border: 'none' }}>
        Book Now
      </button>
    </div>
  </div>
</div>
        </div>
        
      <PageFooter></PageFooter>
    </div>
  );
}
