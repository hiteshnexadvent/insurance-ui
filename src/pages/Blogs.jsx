import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./StylePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [cover, setCover] = useState(null);

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

    const fetchcover=async () => {
      try {
        const res=await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/admin/manage-coverapi`,
          {
            withCredentials: true,
          })
        setCover(res.data);
      }
       catch (err) {
        console.log(err);
      }
    }

    fetchcover();

  }, []);

  if (!blogs) return <div>Loading dashboard...</div>;

  return (
    <div>
      <div id="blogs"  style={
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
  }>
        <h1
          style={{ paddingTop: "300px", fontSize: "4rem", fontWeight: "700" }}
        >
          Blogs
        </h1>
        <h6
          style={{
            color: "#9fa39a",
            paddingTop: "20px",
            paddingBottom: "100px",
          }}
        >
          HOME &gt; BLOGS
        </h6>

        <Navbar></Navbar>
      </div>
      {/* Blog Cards Section */}
      
       <div className="container py-2 gx-0">
  <h2
    className="text-center mb-4 blogs"
    style={{ fontSize: "3.5rem", fontWeight: "600", color: "#0629a7" }}
  >
    Available Blogs
  </h2>
  <div className="row gx-0 blogs-row">
    {blogs.map((item, index) => (
      <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
        <div
          className="card h-100 shadow"
          style={{
            border: "1px solid #8d9094",
            padding: "20px",
            width: "300px",
            height:'50vh',
          }}
          id="blog-cards"
        >
          <Link
            to="/blogread"
            style={{ textDecoration: "none", color: "inherit" }}
            state={{ title: item.title, desc: item.desc, image: item.image[0] }}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_API_URL}${item.image[0]}`}
              className="card-img-top"
              alt={item.title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div
              className="card-body"
              style={{ textAlign: "start", lineHeight: "60px" }}
            >
              <h5
                className="card-title"
                style={{ lineHeight: "35px", fontSize: "1.4rem",height:'180px' }}
              >
                {item.title}
              </h5>
              

              <button style={{width:'120px',height:'50px',borderRadius:'5px',border:'none',backgroundColor:'#0629a7',paddingBottom:'30px',color:'white',marginTop:'20px',fontWeight:'600'}}>Read More</button>

            </div>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    <div style={{marginTop:'50px'}}>
            <Footer></Footer>
          </div>

      
    </div>
  );
}
