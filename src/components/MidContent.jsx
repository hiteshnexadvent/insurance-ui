import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Stylemid.css";
import Swal from 'sweetalert2';


export default function MidContent() {

  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
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
}finally {
    setLoading(false);
  }
  }


  return (
    <div>
      <div className="container-fluid mid-cont1">
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 col-12 pt-lg-5">
            <img src="/images/carousel2.png" alt="" className='img-fluid'/>
          </div>

          <div className="col-lg-6 col-md-12 col-12 px-5 mt-md-5" id="ded">
            <h4  style={{
    backgroundColor:'#0629a7',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  }}>
              Empowering Advisors, Building Futures
            </h4>
            <h1 style={{ fontSize: "2rem" }}>Professional. Passionate. Purpose-Driven.
</h1>
            <p style={{ color: "#5c5353", lineHeight: "20px" }}>
              At Diwan Associates, we’re not just a team—we’re a movement.
With decades of experience and a future-focused approach, we empower individuals to become successful insurance advisors and impactful team leaders.

            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="circle-wrapper">
                <div className="circle-ring">
                  <div className="circle">
                    <div>Year of</div>
                    <div> 2025</div>
                  </div>
                </div>
              </div>

              <div style={{ marginLeft: "20px", lineHeight: "20px" }} id='succ'>
                <h2 style={{
    backgroundColor:'#0629a7',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  }}>150 +</h2>
                <h3>Success Stories
</h3>
                <h3 style={{fontWeight:'700'}}>
                  Book a Consultation

                </h3>
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
  src="https://flagcdn.com/in.svg"
  alt="India Flag"
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
                  Since 2017
                </h3>
                <h3
                  style={{ margin: 0, fontSize: "1.2rem", fontWeight: "600" }}
                >
                  Operating In Delhi
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>


     <div className="container-fluid gx-0">
  <div className="row mt-5 gx-0">
    <div className="col-12 text-center">
      <h2 style={{ fontWeight: '700', margin: '40px 0 25px 0' }}>Our Locations</h2>

      <div
        className="scrolling-text-wrapper"
        style={{
          backgroundColor:'#0629a7',
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

     <div className="container py-5">
  <div className="row text-center mb-4 mt-5">
    <h1 className="fw-bold" style={{textAlign:'start',paddingLeft:'30px'}}>Our Services</h1>
  </div>

  <div className="row justify-content-center">
    {/* Card 1 */}
    <div className="col-md-4 col-sm-6 mb-4" >
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white">
          <i className="fas fa-lightbulb fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Advisor Onboarding</h5>
        <p>
         Start your career as a certified life insurance advisor with our step-by-step guidance.
        </p>
    
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white">
          <i className="fas fa-graduation-cap fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Training & Support</h5>
        <p>
          Get expert training for IRDAI exam, product knowledge, and sales skills.
        </p>
    
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white">
 <i className="fas fa-file-alt fa-2x"></i>        </div>
        <h5 className="mt-3 fw-bold"> Documentation Help
</h5>
        <p>
          We handle all IRDAI-compliant paperwork for a smooth onboarding.
        </p>
    
      </div>
          </div>
          

          {/* Card 4 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white" >
<i className="fas fa-laptop fa-2x"></i>        </div>
        <h5 className="mt-3 fw-bold"> Tools & Software
</h5>
        <p>
          Use our advanced tools and CRM to simplify your work and boost sales.

        </p>
    
      </div>
          </div>
          
          {/* Card 5 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white">
      <i className="fas fa-handshake fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold">Sales & Branch Support
</h5>
        <p>
          Receive sales call help and local branch support across India.
        </p>
    
      </div>
          </div>
          
          {/* Card 6 */}
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="solution-card shadow" style={{textAlign:'start',height:'40vh'}}>
        <div className="icon-wrapper bg-primary text-white" >
      <i className="fas fa-shield-alt fa-2x"></i>
        </div>
        <h5 className="mt-3 fw-bold"> Insurance Policy Sales
</h5>
        <p>
          Offer term plans, savings, retirement, and ULIP products to clients.

        </p>
      </div>
    </div>


  </div>
</div>

      {/* ------------------------------ recruinment process */}

      <div className="container-fluid gx-0 recu" style={{  backgroundColor:'#0629a7',padding:'60px 50px'}}>
        <div className="row gx-0">
          <div className="col-lg-6 col-md-12 col-12 recu-cont1" style={{textAlign:'start',paddingLeft:'50px'}}>
            <h2 style={{color:'white'}}>The Steps of</h2>
            <h1 style={{color:'white',fontSize:'2.5rem',fontWeight:'700'}}>The Recruinment Process</h1>
            <p style={{color:'#c1c9ca'}}>Keep rising employee health care costs down. An employer's total benefit <br /> costs can be as much as 40 percent of the company's operating budget.

            </p>
            

            <div>

<div className=" pe-lg-5 " style={{paddingTop:'36px'}}>
  <div
    className="accordion stylish-accordion"
    id="faqAccordion"
    style={{
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
   color:'#0629a7',
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
          style={{ color:'#0629a7', backgroundColor: 'white' }}
        >
          What services do you provide?
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{color:'#0629a7' }}>
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
          style={{ color:'#0629a7', backgroundColor: 'white' }}
        >
          How long does a project usually take?
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color:'#0629a7' }}>
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
          style={{color:'#0629a7', backgroundColor: 'white' }}
        >
          Do you offer support after deployment?
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color:'#0629a7' }}>
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
          style={{ color:'#0629a7', backgroundColor: 'white' }}
        >
          Do you offer support after deployment?
        </button>
      </h2>
      <div
        id="collapseFour"
        className="accordion-collapse collapse"
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body" style={{ color:'#0629a7', }}>
          Yes, we provide ongoing maintenance, performance monitoring, and upgrade
          services after deployment.
        </div>
      </div>
    </div>
  </div>
</div>

            </div>




          </div>
       <div className="col-lg-6 col-md-12 col-12 free" style={{paddingRight:'50px'}}>
  
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
      <button
  type="submit"
  className="btn btn-success"
  style={{ padding: "10px 30px", fontWeight: "bold", width: '100%',backgroundColor:'#0629a7' }}
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
  </div>
</form>

</div>

        </div>
      </div>

      {/* // ------------------------------- reviews */}

<div className="container">
  <div className="row justify-content-center text-center mt-5">
    <div className="col-12 col-md-10">
      <h2 style={{ color:'#0629a7', marginBottom: '20px', fontWeight: '700' }}>
        What Our Clients Say About Us
      </h2>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        style={{ border: '5px solid white', padding: '20px' }}
            >
              <div className="carousel-indicators">
  {review.map((_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide-to={index}
      className={index === 0 ? "active" : ""}
      aria-current={index === 0 ? "true" : undefined}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ))}
</div>

        <div className="carousel-inner text-light">
          {review.map((item, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} id='carousel-review' key={index} style={{ height: '220px' }}>

              <h5 className="text-dark">{item.review}</h5>

              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3">
                <img
                  src={`${process.env.REACT_APP_BACKEND_API_URL}${item.image}`}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ height: '80px', width: '80px', objectFit: 'cover' }}
                />
                <h6 className="mt-2 mt-md-0 ms-md-3 text-dark" style={{fontSize:'1.5rem',fontWeight:'700'}}>{item.name}</h6>
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
