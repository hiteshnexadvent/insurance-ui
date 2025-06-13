import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import { Link } from 'react-router-dom';

export default function Main() {
  // Custom hook logic inline in component for scroll animation
  function useScrollAnimation() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

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
            <img
  src="/images/carousel.jpg"
  className="d-block w-100"
  alt="..."
  style={{ filter: "brightness(30%)" }} // 100% is normal, 0% is black
/>
            <div className="car-para" style={{position:'absolute',top:'45%',left:'15%'}}>
                      <h1 style={{color:'white',fontSize:'3rem',fontWeight:'700'}}>Start Your Journey as a Life  <br /> Insurance Advisor with Diwan Associates
</h1>
                      <p style={{color:'#ffffff54',fontSize:'1rem',fontWeight:'500'}}>
                        Join 1000+ successful advisors across India. Work part-time or full-time with complete support, training & growth opportunities.

                      </p>
                      <div className="buttons">
                        <Link to='/contact'><button className="btn  me-4 mt-4" style={{ backgroundColor:'#0629a7',color:'white' }}>Become An Free Advisor</button></Link>
                        <Link to="/booking">
    <button className="btn btn-outline-light mt-4">Book A Free Consultation</button>
  </Link>
                      </div>
                    </div>

    </div>
    <div className="carousel-item" style={{position:'relative'}}>
<img
  src="/images/carousel.jpg"
  className="d-block w-100"
  alt="..."
  style={{ filter: "brightness(30%)" }} // 100% is normal, 0% is black
/>            <div className="car-para" style={{position:'absolute',top:'45%',left:'15%'}}>
                      <h1 style={{color:'white',fontSize:'3rem',fontWeight:'700'}}>Start Your Journey as a Life  <br /> Insurance Advisor with Diwan Associates </h1>
                      <p style={{color:'#ffffff54',fontSize:'1rem',fontWeight:'500'}}>
                        Join 1000+ successful advisors across India. Work part-time or full-time with complete support, training & growth opportunities.

                      </p>
                      <div className="buttons">
                        <Link to='/contact'><button className="btn  me-4 mt-4" style={{ backgroundColor:'#0629a7',color:'white' }}>Become An Free Advisor</button></Link>
                <Link to="/booking">
    <button className="btn btn-outline-light mt-4">Book A Free Consultation</button>
  </Link>
                      </div>
                    </div>
    </div>
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

      
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-12 main-about" style={{textAlign:'start'}}>
            <h1 style={{fontSize:'3rem',fontWeight:'600',padding:'50px 50px 20px 50px',color:'#152aa0'}}>About Us</h1>
            <p style={{padding:'0px 50px 20px 50px',lineHeight:'35px',fontSize:'1.2rem'}}>With 8+ years of experience, Diwan Associates is one of India’s leading Life Insurance Advisory Platforms. Based in Vikaspuri, New Delhi, we empower freelancers, housewives, and professionals to become certified life insurance advisors with the IRDAI. Our team of 1000+ advisors operates across states like Delhi, Punjab, Odisha, Assam, Kerala, and more.
</p>

          </div>
          <div className="col-lg-6 col-md-12 col-12 main-about2">
            <img src="/images/i1.png" alt="" style={{width:'50%'}}/>
          </div>
        </div>
      </div>





      
      
<div className="container overlapping-cards">
  <div className="row mt-5">
    {/* Expert Support */}
            <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref3} style={style3}>
      <div className="card custom-card shadow text-center  main-card" style={{height:'40vh'}}>
        <div className="custom-card-overlay">
          {/* <span className="overlay-text">From IRDAI exam preparation to daily sales support—we guide you at every step, 7 days a week.</span> */}
          <img src="/images/c1.jpg" alt="" className="img-fluid" style={{height:'100%',filter: "brightness(30%)"}}/>
        </div>

        <div className="card-number">01</div>
        <div className="icon-wrapper bg-primary">
          <i className="fas fa-user-shield fa-2x"></i>
        </div>
        <h5 className="card-title">Complete Support System</h5>
        <p className="card-text">
           From IRDAI exam preparation to daily sales support—we guide you at every step, 7 days a week.

        </p>
      </div>

    </div>
            {/* Experience Team */}
    <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref1} style={style1}>
      <div className="card custom-card shadow text-center  main-card" style={{height:'40vh'}}>
        <div className="custom-card-overlay">
          

<img src="/images/c2.jpg" alt="" className="img-fluid" style={{height:'100%',filter: "brightness(30%)"}}/>
        </div>

        <div className="card-number">02</div>
        <div className="icon-wrapper bg-primary">
          <i className="fas fa-users fa-2x"></i>
        </div>
        <h5 className="card-title">Experienced Leadership
</h5>
        <p className="card-text">
          Learn directly from our 8+ years of industry experience and a team of 1000+ successful advisors.

        </p>
      </div>
    </div>

      {/* Smart Solutions */}
    <div className="col-md-4 col-sm-6 col-12 main-card1" ref={ref2} style={style2}>
      <div className="card custom-card shadow text-center main-card" style={{height:'40vh'}}>
        <div className="custom-card-overlay">
          
          <img src="/images/c3.jpg" className="img-fluid" alt="" style={{height:'100%',filter: "brightness(30%)"}}/>
        </div>

        <div className="card-number">03</div>
        <div className="icon-wrapper bg-primary">
          <i className="fas fa-lightbulb fa-2x"></i>
        </div>
        <h5 className="card-title">Smart Advisor Tools
</h5>
        <p className="card-text">
         Get access to digital tools, training systems, and local branch support that help you sell better and earn more.


        </p>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}
