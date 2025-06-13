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
              <div className="row mt-5">
                  <div className="col-12" style={{textAlign:'start'}}>
                      <p> Effective Date: [Insert Date]</p>
                      <p> Last Updated: [Insert Date]</p>
                      <h6 style={{lineHeight:'30px',paddingTop:'20px',fontWeight:'600'}}> At Diwan Associates, we are committed to protecting your privacy and ensuring that your 
personal data is handled in a safe and responsible manner. This Privacy Policy outlines how we 
collect, use, disclose, and protect your information when you interact with our website, mobile 
                          platforms, and services</h6>
                      
                      <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}>1. Who We Are</h4>
                      <p> Diwan Associates is a life insurance advisory network headquartered in Vikaspuri, New Delhi, 
India, operating across multiple Indian states. We help individuals become certified life insurance 
advisors and assist clients in finding suitable insurance solutions.</p>
                      <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 2. Information We Collect</h4>
                      <p> We may collect the following types of information from you:</p>
                      <h6 style={{fontWeight:'700'}}> a) Personal Information</h6>
                      <ul>
                          <li> Full name</li>
                          <li>Contact number</li>
                          <li> Email address</li>
                          <li> Date of birth</li>
                          <li>  PAN, Aadhaar, or other government ID (for IRDAI registration)</li>
                          <li> Educational and professional details</li>
                      </ul>

                      <p style={{fontWeight:'700'}}> b) Technical Information</p>
                      <ul>
                          <li> IP address</li>
                          <li> Browser type and version</li>
                          <li>  Device information</li>
                          <li>  Pages visited and browsing activity on our website</li>
                    
                      </ul>

                      <p style={{fontWeight:'700'}}> c) Financial & Regulatory Information</p>
                      <ul>
                          <li> Full name</li>
                          <li>Contact number</li>
                          <li> Email address</li>
                          <li> Date of birth</li>
                          <li>  PAN, Aadhaar, or other government ID (for IRDAI registration)</li>
                          <li> Educational and professional details</li>
            </ul>
            <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 3.How we use your Information</h4>
            <p style={{fontWeight:'700'}}>Your data may be used to:</p>
            <ul>
              <li> Register and train you as a life insurance advisor</li>
              <li> Process your IRDAI exam application and certification</li>
              <li>Provide ongoing sales, training, and compliance support</li>
              <li> Improve our website, content, and advisor platform</li>
              <li> Communicate updates, offers, and important notices</li>
              <li>Comply with regulatory requirements</li>
            </ul>
            <p> We do not sell, rent, or trade your personal information to third parties</p>
            <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 4. Cookies and Tracking Technologies</h4>
            <p> We use cookies and other tracking technologies to improve user experience and website 
performance. You can disable cookies in your browser settings, but some site features may not 
              function properly</p>
            <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}>5. Sharing Your Data</h4>
            <p style={{fontWeight:'700'}}>We may share your data only in the following circumstances:</p>
            <ul>
              <li> With IRDAI and affiliated insurers for licensing and regulatory compliance</li>
              <li>With our technology partners who support our systems and training platforms</li>
              <li>With legal authorities if required by law or legal process</li>
              <li>Internally, among Diwan Associates teams for operational purposes</li>
            </ul>
            <p> All third parties are required to follow data protection norms.
</p>
<h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 6. Data Retention</h4>
<p>We retain your data as long as necessary to fulfill the purpose for which it was collected, 
including legal, regulatory, and accounting obligations. If you cease to be affiliated with Diwan 
Associates, your data will be securely archived or deleted as per policy.</p>
<h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 7. Your Rights</h4>
<p style={{fontWeight:'700'}}> You have the right to:</p>
            <ul>
              <li>Access and review your personal data</li>
              <li>Request correction or updates to your information</li>
              <li>Withdraw consent for marketing communications</li>
              <li>Request deletion of your data (subject to legal limits)</li>
            </ul>
            <p>
  To exercise any of these rights, please contact us at 
  <a href="mailto:support@diwanassociates.com" style={{textDecoration:'none'}}> support@diwanassociates.com</a>.
</p>
<h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}>8. Data Security</h4>
<p> We implement industry-standard technical and organizational measures to safeguard your data 
from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over 
the internet is 100% secure.</p>
<h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 9. Children’s Privacy</h4>
<p>Our services are intended for individuals aged 18 and above. We do not knowingly collect data 
from children under 18.</p>
<h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}> 10. Changes to This Privacy Policy</h4>
<p> We may update this policy from time to time. Any changes will be posted on this page with a 
revised “Last Updated” date. Continued use of our website or services constitutes acceptance of 
              the changes.</p>
            <h4 style={{color:'#0629a7',paddingTop:'20px',fontWeight:'600'}}>11. Contact Us</h4>
            <p>If you have questions, concerns, or complaints about our Privacy Policy, please contact:</p>
<p style={{fontWeight:'700',paddingTop:'30px'}}>Diwan Associates</p>
<p style={{fontWeight:'700'}}>Vikaspuri, New Delhi, India</p>

<p style={{fontWeight:'700'}}>
  <i class="fas fa-envelope pe-2"></i>
  Email: <a href="mailto:support@diwanassociates.com" style={{textDecoration:'none'}}>support@diwanassociates.com</a>
</p>

<p style={{fontWeight:'700'}}>
  <i class="fas fa-phone pe-2"></i>
  Phone: <a href="tel:+911234567890" style={{textDecoration:'none'}}>+91 12345 67890</a>
</p>
                  </div>
              </div>
          </div>
      

    </div>
  )
}
