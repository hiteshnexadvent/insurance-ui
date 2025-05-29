import React from 'react';

import "./Stylemid.css";

export default function MidContent() {
  return (
    <div>
      <div className="container-fluid mid-cont1">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <iframe
              width="100%"
              height="420" // yahan 500 ki jagah 700 ya jo height chahiye wo likho
              src="https://www.youtube.com/embed/-VK0axfge4A?start=2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col-lg-6 col-md-6 col-12" id="ded">
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


     <div className="container-fluid">
  <div className="row">
    <div className="col-12 text-center">
      <h2 style={{ fontWeight: '700', margin: '40px 0 15px 0' }}>Our Services</h2>

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
  <div className="row text-center mb-4">
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

      <div className="container-fluid gx-0" style={{backgroundColor:'#019785',padding:'60px 50px'}}>
        <div className="row gx-0">
          <div className="col-lg-6" style={{textAlign:'start'}}>
            <h2 style={{color:'white',textDecoration:'underline'}}>The Steps of</h2>
            <h1 style={{color:'white',fontSize:'2.5rem',fontWeight:'700'}}>The Recruinment Process</h1>
            <p style={{color:'#c1c9ca'}}>Keep rising employee health care costs down. An employer's total benefit costs can be as much as 40 percent of the company's operating budget.

            </p>
            

            <div>

           <div className="container py-4 me-5">
  <div
    className="accordion stylish-accordion"
    id="faqAccordion"
    style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '800px',
      color: '#019785',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }}
  >
    <div className="accordion-item mb-3">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed" // 👈 Add this!
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
       <div className="col-lg-6">
  
<form className="p-4 rounded shadow-lg contact-form bg-white">
  <h1 className="mb-4 fw-bold">Request Free Consultation</h1>

  <div className="row g-4">
    {/* Full Name */}
    <div className="col-md-6 position-relative form-label-wrapper">
      <label htmlFor="fullName" className="fixed-label">Full Name</label>
      <input
        type="text"
        className="form-control input-icon"
        id="fullName"
        placeholder="Full Name"
        required
      />
      <i className="fas fa-user icon-inside"></i>
    </div>

    {/* Email */}
    <div className="col-md-6 position-relative form-label-wrapper">
      <label htmlFor="email" className="fixed-label">Email Address</label>
      <input
        type="email"
        className="form-control input-icon"
        id="email"
        placeholder="Email Address"
        required
      />
      <i className="fas fa-envelope icon-inside"></i>
    </div>

    {/* Phone */}
    <div className="col-md-6 position-relative form-label-wrapper">
      <label htmlFor="phone" className="fixed-label">Phone Number</label>
      <input
        type="tel"
        className="form-control input-icon"
        id="phone"
        placeholder="Phone Number"
        required
      />
      <i className="fas fa-phone icon-inside"></i>
    </div>

    {/* Subject */}
    <div className="col-md-6 position-relative form-label-wrapper">
      <label htmlFor="subject" className="fixed-label">Subject</label>
      <input
        type="text"
        className="form-control input-icon"
        id="subject"
        placeholder="Subject"
        required
      />
      <i className="fas fa-edit icon-inside"></i>
    </div>

    {/* Message */}
    <div className="col-12 position-relative form-label-wrapper">
      <label htmlFor="message" className="fixed-label">Your Message</label>
      <textarea
        className="form-control input-icon"
        id="message"
        rows="5"
        placeholder="Your Message"
        required
      ></textarea>
      <i className="fas fa-comment-dots icon-inside-textarea"></i>
    </div>

    {/* Submit */}
    <div className="col-12 text-center">
      <button type="submit" className="btn btn-success px-5 py-2 fw-bold">
        Submit
      </button>
    </div>
  </div>
</form>

</div>

        </div>
      </div>


      


    </div>
  );
}
