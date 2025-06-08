import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Stylemid.css";
import Swal from 'sweetalert2';


export default function MidContent() {

  const [review, setReview] = useState([]);
    let [formData, setFormData] = useState({ name: '', email: '',mobile:'', city: '', message: '' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // useefect for reviews

  useEffect(() => {
    const fetchreview=async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-reviewapi`);
        setReview(response.data);

      }
      catch (err) {
        console.log(err);
      }
    }

    fetchreview();
  }, [])
  

  // ----------------------------- form

   const handleSubmit = async(e) => {
    e.preventDefault();

    try {
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
}
  }


  return (
    <div>
      <div className="container-fluid mid-cont1">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12">
            <iframe
              width="100%"
              height="420" 
              src="https://www.youtube.com/embed/-VK0axfge4A?start=2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-lg-6 col-md-6 col-12 px-5" id="ded">
            <h2 style={{ color: "#019785", textDecoration: "underline" }}>
              Dedicated Team
            </h2>
            <h1 style={{ fontSize: "3rem" }}>Professional Individuals</h1>
            <p style={{ color: "#5c5353", lineHeight: "20px" }}>
              Our power of choice is untrammelled and when nothing prevents{" "}
              <br />
              being able to do what we like best every pleasure.
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="circle-wrapper">
                <div className="circle-ring">
                  <div className="circle">
                    <div>Year of</div>
                    <div> 2024</div>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "20px", lineHeight: "20px" }}>
                <h2 style={{ color: "#019785" }}>84%</h2>
                <h3>Income Statement</h3>
                <p>
                  Certain circumstances seds owing to the claims <br /> duty
                  righteous indignation and so beguiled.
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <button
                style={{
                  width: "120px",
                  height: "45px",
                  border: "none",
                  backgroundColor: "#019785",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Download
              </button>

              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #ccc",
                  flexShrink: 0,
                }}
              >
                <img
                  src="https://flagcdn.com/gb.svg"
                  alt="UK Flag"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Texts in vertical stack */}
              <div>
                <h3
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                  }}
                >
                  Since 1992
                </h3>
                <h3
                  style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}
                >
                  Operating In Birmingham
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>


     <div className="container-fluid gx-0">
  <div className="row mt-5 gx-0">
    <div className="col-12 text-center">
      <h2 style={{ fontWeight: '700', margin: '40px 0 25px 0' }}>Our Services</h2>

      <div
        className="scrolling-text-wrapper"
        style={{
          backgroundColor: '#019785',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          padding: '8px 0',
        }}
      >
        <div
          className="scrolling-text"
          style={{
            display: 'inline-block',
            animation: 'scrollLeft 20s linear infinite',
            color: 'white',
            fontWeight: '500',
            fontSize: '16px',
          }}
        >
          <span>
            Delhi &nbsp; | &nbsp; Haryana &nbsp; | &nbsp; Uttar Pradesh &nbsp; | &nbsp;
            Punjab &nbsp; | &nbsp; Assam &nbsp; | &nbsp; Kerala &nbsp; | &nbsp;
            Odisha &nbsp; | &nbsp; Maharashtra &nbsp; | &nbsp; Gujarat &nbsp; | &nbsp;
            Uttarakhand &nbsp; | &nbsp; Himachal Pradesh &nbsp; | &nbsp;
          </span>
          <span>
            Delhi &nbsp; | &nbsp; Haryana &nbsp; | &nbsp; Uttar Pradesh &nbsp; | &nbsp;
            Punjab &nbsp; | &nbsp; Assam &nbsp; | &nbsp; Kerala &nbsp; | &nbsp;
            Odisha &nbsp; | &nbsp; Maharashtra &nbsp; | &nbsp; Gujarat &nbsp; | &nbsp;
            Uttarakhand &nbsp; | &nbsp; Himachal Pradesh &nbsp; | &nbsp;
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

     <div className="container-fluid py-5 bg-light">
  <div className="row text-center mb-4 mt-5">
    <h1 className="fw-bold">Effective Solutions</h1>
  </div>

  <div className="row justify-content-center">
    {/* Card 1 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow">
        <div className="icon-wrapper bg-primary text-white">
          <i className="fas fa-lightbulb fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Innovative Strategy</h5>
        <p>
          We help businesses thrive with modern, scalable, and tech-driven approaches.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow">
        <div className="icon-wrapper bg-success text-white">
          <i className="fas fa-cogs fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Technical Excellence</h5>
        <p>
          Our expert team ensures smooth operations and robust system architecture.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow">
        <div className="icon-wrapper bg-warning text-white">
          <i className="fas fa-chart-line fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Business Growth</h5>
        <p>
          Targeted solutions to increase your market reach and maximize revenue.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  </div>
</div>

      {/* ------------------------------ recruinment process */}

      <div className="container-fluid gx-0 recu" style={{backgroundColor:'#019785',padding:'60px 50px'}}>
        <div className="row gx-0">
          <div className="col-lg-6 " style={{textAlign:'start'}}>
            <h2 style={{color:'white',textDecoration:'underline'}}>The Steps of</h2>
            <h1 style={{color:'white',fontSize:'2.5rem',fontWeight:'700'}}>The Recruinment Process</h1>
            <p style={{color:'#c1c9ca'}}>Keep rising employee health care costs down. An employer's total benefit costs can be as much as 40 percent of the company's operating budget.

            </p>
            

            <div>

<div className="py-4 pe-3">
  <div
    className="accordion stylish-accordion"
    id="faqAccordion"
    style={{
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  color: '#019785',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
}}

  >
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
          style={{ color: '#019785', backgroundColor: 'white' }}
        >
          What services do you provide?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#019785' }}>
          We offer end-to-end digital solutions, including web development, UI/UX
          design, branding, and marketing.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
          style={{ color: '#019785', backgroundColor: 'white' }}
        >
          How long does a project usually take?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#019785' }}>
          Depending on the scope, small projects take 2–4 weeks, while larger ones
          may go up to 3 months or more.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
          style={{ color: '#019785', backgroundColor: 'white' }}
        >
          Do you offer support after deployment?
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#019785' }}>
          Yes, we provide ongoing maintenance, performance monitoring, and upgrade
          services after deployment.
        </div>
      </div>
    </div>

    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="headingFour">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
          style={{ color: '#019785', backgroundColor: 'white' }}
        >
          Do you offer support after deployment?
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color: '#019785' }}>
          Yes, we provide ongoing maintenance, performance monitoring, and upgrade
          services after deployment.
        </div>
      </div>
    </div>
  </div>
</div>

            </div>




          </div>
       <div className="col-lg-6 free">
  
<form className="p-3 rounded shadow-lg contact-form bg-white ms-lg-8 mx-auto" style={{ maxWidth: '100%', width: '100%'  }} onSubmit={handleSubmit}>
  <h2 className="mb-4 fw-bold">Request Free Consultation</h2>

  <div className="row g-4">
    {/* Full Name */}
    <div className="col-md-6 position-relative form-label-wrapper" style={{textAlign:'start'}}>
      <label htmlFor="fullName" className="fixed-label">Full Name</label>
      <input
        type="text"
        className="form-control input-icon"
                    id="fullName"
                    name="name"
                  value={formData.name}
                  onChange={handleChange}
        required
      />
    </div>

    {/* Email */}
    <div className="col-md-6 position-relative form-label-wrapper" style={{textAlign:'start'}}>
      <label htmlFor="email" className="fixed-label">Email Address</label>
      <input
        type="email"
        className="form-control input-icon"
                    id="email"
                    name="email"
                  value={formData.email}
                  onChange={handleChange}
        required
      />
    </div>

    {/* Phone */}
    <div className="col-md-6 position-relative form-label-wrapper" style={{textAlign:'start'}}>
      <label htmlFor="phone" className="fixed-label">Phone Number</label>
      <input
        type="tel"
        className="form-control input-icon"
                    id="phone"
                   name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
        required
      />
    </div>

    <div className="col-md-6 position-relative form-label-wrapper" style={{textAlign:'start'}}>
  <label htmlFor="city" className="fixed-label">City</label>
  <select
    id="city"
    className="form-control input-icon"
    name="city"
                  value={formData.city}
                  onChange={handleChange}
                    required
                    
    defaultValue=""
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
</div>


    {/* Message */}
    <div className="col-12 position-relative form-label-wrapper" style={{textAlign:'start'}}>
      <label htmlFor="message" className="fixed-label">Your Message</label>
      <textarea
        className="form-control input-icon"
        id="message"
        name="message"
                  value={formData.message}
                  onChange={handleChange}
        rows="1"
        required
      ></textarea>
    </div>

    {/* Submit */}
    <div className="col-12 text-center">
      <button type="submit" className="btn btn-success px-5 py-2 fw-bold" style={{width:'100%'}}>
        Submit
      </button>
    </div>
  </div>
</form>

</div>

        </div>
      </div>

      {/* // ------------------------------- reviews */}

<div className="container">
  <div className="row justify-content-center text-center mt-5">
    <div className="col-12 col-md-10">
      <h2 style={{ color: '#019785', marginBottom: '20px', fontWeight: '700' }}>
        What Our Clients Say About Us
      </h2>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        style={{ border: '5px solid white', padding: '20px' }}
      >
        <div className="carousel-inner text-light">
          {review.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index} style={{ minHeight: '200px' }}>

              <h5 className="text-dark">{item.review}</h5>

              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
                <img
                  src={`${process.env.REACT_APP_BACKEND_API_URL}${item.image}`}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                />
                <h6 className="mt-2 mt-md-0 ms-md-3 text-dark">{item.name}</h6>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>





      


      


    </div>
  );
}
