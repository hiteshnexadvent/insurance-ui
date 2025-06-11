import React from 'react';
import { useEffect } from "react";
import "./Style.css";

export default function Navbar() {

    // const [showInput, setShowInput] = useState(false);
    // const [searchText, setSearchText] = useState("");
  

  // const toggleSearch = () => {
  //   setShowInput((prev) => !prev);
  // };

  useEffect(() => {
  const nav = document.querySelector(".navbar-fixed");

  const onScroll = () => {
    if (window.scrollY > 0) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", onScroll);

  // Call onScroll once on mount to set correct sticky state immediately
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);



  return (
    <div>
      <div className="navbar-fixed">
       <div className="container gx-0 mt-4 no-top-margin">
          <div className="row gx-0" id="nav-cont1">
            <div
              className="col-lg-8 col-md-8 col-sm-12 col-12 nav-cont2"
              style={{
                display: "flex",
                alignItems: "center",
                paddingTop: "10px",
                paddingLeft: "30px",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              {/* Address */}
              <div className="contact-item address-item">
                <i className="fa-solid fa-location-dot pe-2 icon-address"></i>
                <p className="nav-address">WZ-187, First Floor, Budella,
Vikaspuri,New Delhi</p>
              </div>

              {/* Email */}
              <div className="contact-item">
  <i className="fa-solid fa-envelope pe-2 icon-email"></i>
  <a href="mailto:sendmail@creote.com" style={{ textDecoration: 'none' }}>
    <p className="nav-email">info.diwanassociates@gmail.com</p>
  </a>
</div>


              {/* Phone */}
              <div className="contact-item">
                <i className="fa-solid fa-phone-volume pe-2 icon-phone"></i>
                <p className="nav-phone">+9806071234</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-8 col-sm-12 col-12 nav-cont3" id='gettouch'
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <i
                className="fa-brands fa-facebook-f pt-3 fs-5"
                style={{ color: "#ddd0d0" }}
              ></i>
              <i
                className="fa-brands fa-twitter pt-3 fs-5"
                style={{ color: "#ddd0d0" }}
              ></i>
              <i
  className="fa-brands fa-linkedin pt-3 fs-5"
  style={{ color: "#ddd0d0" }}
></i>

              <a href="/contact" id='gettouch'>
              <button 
                style={{
                  width: "150px",
                  height: "40px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  fontWeight: "500",
                  marginTop: "10px",
                }}
              >
                Get In Touch
                <i className="fa-solid fa-arrow-right ps-2" id='gettouch'></i>
              </button>
              </a>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid mt-2">
              <a className="navbar-brand" href="/">
                <img src="/images/logo.png" className="img-fluid" alt="" style={{ width: "150px" }} />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <a
                      className="nav-link  text-dark fw-medium ms-3"
                      href="/"
                      role="button"
                    >
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-dark fw-medium ms-3"
                      href="/about"
                      role="button"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-dark fw-medium ms-3"
                      href="/join"
                      role="button"
                    >
                      Join Our Team
                    </a>
                  </li>

                  <li className="nav-item ">
                    <a
                      className="nav-link text-dark fw-medium ms-3"
                      href="/blog"
                      role="button"
                    >
                      Blog
                    </a>
                  </li>

                

                  <li className="nav-item ">
                    <a
                      className="nav-link text-dark fw-medium ms-3"
                      href="/contact"
                      role="button"
                    >
                      Contact
                    </a>
                  </li>
                </ul>

                {/* ---------- search */}
                
                {/* <div className="d-flex align-items-center position-relative">
      {showInput && (
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "150px",
            transition: "width 0.3s ease",
            position: "absolute",
            right: "40px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10
          }}
        />
      )}

      <button
        id="search"
        className="btn border-0 bg-transparent"
        onClick={toggleSearch}
      >
        <i className="fa-solid fa-magnifying-glass me-2 fs-4"></i>
      </button>
    </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
