import React, { useEffect, useRef, useState } from "react";
import "./Style.css";

export default function Main() {
  // Custom hook logic inline in component for scroll animation
  function useScrollAnimation() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    const style = {
      transition: "all 0.8s ease-out",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
    };

    return [ref, style];
  }

  // Use the scroll animation hook for each card
  const [ref1, style1] = useScrollAnimation();
  const [ref2, style2] = useScrollAnimation();
  const [ref3, style3] = useScrollAnimation();

  return (
    <div id="main">

      
      {/* ---------------------------- carousel */}

      

      <div id="carouselExample" className="carousel slide" style={{position:'relative'}} >
  <div className="carousel-inner">
    <div className="carousel-item active">
            <img src="/images/banner1.jpg" class="d-block w-100" alt="..." />
            <div className="car-para" style={{position:'absolute',top:'45%',left:'25%'}}>
                      <h1 style={{color:'white',fontSize:'3rem',fontWeight:'700'}}>It's Time to Grow Your Startup</h1>
                      <p style={{color:'#ffffff54',fontSize:'1rem',fontWeight:'500'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Earum, <br /> ea facere eius error ducimus iste eligendi!
                      </p>
                      <div className="buttons">
                        <button className="btn btn-primary me-4 mt-4">Read More</button>
                        <button className="btn btn-outline-light mt-4">Contact Us</button>
                      </div>
                    </div>

    </div>
    <div class="carousel-item" style={{position:'relative'}}>
            <img src="/images/banner1.jpg" class="d-block w-100" alt="..." />
            <div className="car-para" style={{position:'absolute',top:'45%',left:'25%'}}>
                      <h1 style={{color:'white',fontSize:'3rem',fontWeight:'700'}}>It's Time to Grow Your Startup</h1>
                      <p style={{color:'#ffffff54',fontSize:'1rem',fontWeight:'500'}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Earum, <br /> ea facere eius error ducimus iste eligendi!
                      </p>
                      <div className="buttons">
                        <button className="btn btn-primary me-4 mt-4">Read More</button>
                        <button className="btn btn-outline-light mt-4">Contact Us</button>
                      </div>
                    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>






      
      
<div className="container overlapping-cards">
  <div className="row mt-5">
    {/* Expert Support */}
          {/* <div id="main-card1"> */}
            <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref3} style={style3}>
      <div className="card custom-card shadow text-center">
        {/* Overlay for sliding color + text */}
        <div className="custom-card-overlay">
          <span className="overlay-text">Read More</span>
        </div>

        <div className="card-number">01</div>
        <div className="icon-wrapper bg-success">
          <i className="fas fa-user-shield fa-2x"></i>
        </div>
        <h5 className="card-title">Expert Support</h5>
        <p className="card-text">
          We provide 24/7 expert guidance for all your startup queries.
        </p>
      </div>
    {/* </div> */}

    </div>
          {/* <div id="main-card1"> */}
            {/* Experience Team */}
    <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref1} style={style1}>
      <div className="card custom-card shadow text-center">
        {/* Overlay for sliding color + text */}
        <div className="custom-card-overlay">
          <span className="overlay-text">Read More</span>
        </div>

        <div className="card-number">02</div>
        <div className="icon-wrapper bg-primary">
          <i className="fas fa-users fa-2x"></i>
        </div>
        <h5 className="card-title">Experience Team</h5>
        <p className="card-text">
          Get your startup off the ground quickly with our expert solutions.
        </p>
      </div>
    {/* </div> */}
    </div>

    {/* <div id="main-card1"> */}
      {/* Smart Solutions */}
    <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref2} style={style2}>
      <div className="card custom-card shadow text-center">
        {/* Overlay for sliding color + text */}
        <div className="custom-card-overlay">
          <span className="overlay-text">Read More</span>
        </div>

        <div className="card-number">03</div>
        <div className="icon-wrapper bg-warning">
          <i className="fas fa-lightbulb fa-2x"></i>
        </div>
        <h5 className="card-title">Smart Solutions</h5>
        <p className="card-text">
          Choose plans that scale with your business needs and goals.
        </p>
      </div>
    </div>
    {/* </div> */}
  </div>
</div>



    </div>
  );
}
