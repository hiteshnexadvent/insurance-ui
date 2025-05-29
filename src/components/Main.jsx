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
    <div>

      <div id="carousel-wrapper">
        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-12" id="main-cont1">
              <div
                id="carouselExample"
                className="carousel slide position-relative"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* First Slide */}
                  <div className="carousel-item active">
                    <img
                      src="/images/banner1.jpg"
                      className="d-block w-100 carousel-img"
                      alt="Slide 1"
                    />
                    <div className="custom-caption">
                      <h1>It's Time to Grow Your Startup</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Earum, ea facere eius error ducimus iste eligendi!
                      </p>
                      <div>
                        <button className="btn btn-primary me-2">Read More</button>
                        <button className="btn btn-outline-light">Contact Us</button>
                      </div>
                    </div>
                  </div>

                  {/* Second Slide */}
                  <div className="carousel-item">
                    <img
                      src="/images/banner1.jpg"
                      className="d-block w-100 carousel-img"
                      alt="Slide 2"
                    />
                    <div className="custom-caption">
                      <h1>Transform Your Ideas into Reality</h1>
                      <p>
                        Startup success begins with clarity and bold steps. Let
                        us guide your journey forward.
                      </p>
                      <div>
                        <button className="btn btn-primary me-2">Explore</button>
                        <button className="btn btn-outline-light">Get Started</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="container overlapping-cards">
  <div className="row">
    {/* Expert Support */}
    <div className="col-md-4 col-sm-6 col-12" ref={ref3} style={style3}>
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
    </div>

    {/* Experience Team */}
    <div className="col-md-4 col-sm-6 col-12" ref={ref1} style={style1}>
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
    </div>

    {/* Smart Solutions */}
    <div className="col-md-4 col-sm-6 col-12" ref={ref2} style={style2}>
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
  </div>
</div>



    </div>
  );
}
