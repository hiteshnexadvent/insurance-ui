import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./StylePage.css";
import axios from "axios";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';


export default function Blogsread() {
  const location = useLocation();

  const { title, desc, image } = location.state || {};
  // console.log(location.state);

  // ------------------------------ useffect for blogs

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-blogapi`,
          {
            withCredentials: true,
          }
        );
        setBlogs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchapi();
  }, []);

  if (!blogs) return <div>Loading dashboard...</div>;

  return (
    <div>

      {/* Helmet for title and favicon */}
      <Helmet>
        <title>Diwan Associates</title>
        <link rel="icon" type="image/png" href="/images/logo.png?v=123" />
        <meta name="description" content="This is our homepage." />
      </Helmet>

      <div id="blogread">
        <Navbar></Navbar>

        <div className="container-fluid gx-0">
          <div className="row gx-0">
            <div className="col-12">
              <div id="blogread-title">
                <h1>{title}</h1>
                <p>Home &gt; Blogs &gt; {title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 img-fluid">
            <img
              src={`${process.env.REACT_APP_BACKEND_API_URL}${image}`}
              alt=""
              style={{ width: "100%",borderRadius:'20px', padding: "20px" }}
            />
          </div>
          <div
            className="col-lg-4 blogread"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
            
          >
            <div
              className="col-lg-4"
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#b4babd53",
                borderRadius: "20px",
                width: "100%",
                height: "auto",
                textAlign: "start",
                marginTop: "22px",
              }}
            >
              {/* <label
                htmlFor="Search"
                style={{ padding: "20px", fontSize: "1.5rem" }}
              >
                Search
              </label> */}
{/* 
              <div
                style={{
                  display: "flex",
                  marginTop: "5px",
                  padding: "0 20px 40px 20px",
                }}
              > */}
                {/* <input
                  type="text"
                  name="search"
                  placeholder="Search here"
                  style={{
                    flex: 1,
                    padding: "8px 12px",
                    borderRadius: "5px 0 0 5px",
                    border: "1px solid #ccc",
                    outline: "none",
                  }}
                /> */}

                {/* <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    border: "none",
                    backgroundColor: "#0629a7",
                    color: "white",
                    borderRadius: "0 5px 5px 0",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Search
                </button> */}
              {/* </div> */}
            </div>

            <div
              style={{
                backgroundColor: "#b4babd53",
                marginTop: "40px",
                textAlign: "start",
                borderRadius: "20px",
                padding: "10px ",
                height:'300px'
              }}
            >
              <h4 style={{ color: "#0629a7",paddingTop:'20px' }} >Recent Posts</h4>
              {blogs.slice(0, 3).map((item, index) => (
                <div key={index} style={{paddingTop:'10px'}}>
                  <Link 
                    to="/blogread"
                    style={{ textDecoration: "none" }}
                    state={{
                      title: item.title,
                      desc: item.desc,
                      image: item.image[0],
                    }}
                  >
                    <p className="recent" style={{ color: "#686869" }}>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 desc">
            <p style={{textAlign:'start'}}>{desc}</p>
          </div>
        </div>
      </div>

      <div style={{marginTop:'50px'}}>
        <Footer></Footer>
      </div>
    </div>
  );
}
