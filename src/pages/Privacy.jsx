import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";


export default function Privacy() {

    const [cover, setCover] = useState(null);
    
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


     useEffect(() => {
  
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
                Privacy Policy
              </h1>
              <h6
                style={{
                  color: "#9fa39a",
                  paddingTop: "20px",
                  paddingBottom: "100px",
                }}
              >
                HOME &gt; PRIVACY POLICY
              </h6>
      
              <Navbar></Navbar>
          </div>
          
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <p> Effective Date: [Insert Date]</p>
                      <p> Last Updated: [Insert Date]</p>
                      <h5> At Diwan Associates, we are committed to protecting your privacy and ensuring that your 
personal data is handled in a safe and responsible manner. This Privacy Policy outlines how we 
collect, use, disclose, and protect your information when you interact with our website, mobile 
                          platforms, and services</h5>
                      
                      <h3>1. Who We Are</h3>
                      <p> Diwan Associates is a life insurance advisory network headquartered in Vikaspuri, New Delhi, 
India, operating across multiple Indian states. We help individuals become certified life insurance 
advisors and assist clients in finding suitable insurance solutions.</p>
                      <h3> 2. Information We Collect</h3>
                      <p> We may collect the following types of information from you:</p>
                      <h5> a) Personal Information</h5>
                      <ul>
                          <li> Full name</li>
                          <li>Contact number</li>
                          <li> Email address</li>
                          <li> Date of birth</li>
                          <li>  PAN, Aadhaar, or other government ID (for IRDAI registration)</li>
                          <li> Educational and professional details</li>
                      </ul>

                      <h5> b) Technical Information</h5>
                      <ul>
                          <li> IP address</li>
                          <li> Browser type and version</li>
                          <li>  Device information</li>
                          <li>  Pages visited and browsing activity on our website</li>
                    
                      </ul>

                      <h5> c) Financial & Regulatory Information</h5>
                      <ul>
                          <li> Full name</li>
                          <li>Contact number</li>
                          <li> Email address</li>
                          <li> Date of birth</li>
                          <li>  PAN, Aadhaar, or other government ID (for IRDAI registration)</li>
                          <li> Educational and professional details</li>
                      </ul>
                  </div>
              </div>
          </div>
      

    </div>
  )
}
