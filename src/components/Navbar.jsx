import React from 'react';
import { useEffect } from "react";
import "./Style.css";
import { useLocation } from 'react-router-dom';

export default function Navbar() {
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
       <div className="container mt-4">
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
                <p className="nav-address">61W Business Str Hobert, LA</p>
              </div>

              {/* Email */}
              <div className="contact-item">
                <i className="fa-solid fa-envelope pe-2 icon-email"></i>
                <p className="nav-email">sendmail@creote.com</p>
              </div>

              {/* Phone */}
              <div className="contact-item">
                <i className="fa-solid fa-phone-volume pe-2 icon-phone"></i>
                <p className="nav-phone">+9806071234</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-8 col-sm-12 col-12 nav-cont3"
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
                className="fa-brands fa-skype pt-3 fs-5"
                style={{ color: "#ddd0d0" }}
              ></i>
              <i
                className="fa-brands fa-telegram pt-3 fs-5"
                style={{ color: "#ddd0d0" }}
              ></i>
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
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </div>

          <nav className="navbar navbar-expand-lg bg-light ">
            <div className="container-fluid">
              <a className="navbar-brand" href="https://example.com">
                <img src="/images/logo.png" alt="" style={{ width: "150px" }} />
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

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-dark fw-medium ms-3"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Elements
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
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

                  <li className="nav-item dropdown ">
                    <a
                      className="nav-link dropdown-toggle text-dark fw-medium ms-3"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">
                          Something else here
                        </a>
                      </li>
                    </ul>
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

                <button id="search" className="btn border-0 bg-transparent">
                  <i className="fa-solid fa-magnifying-glass me-2 fs-4"></i>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
