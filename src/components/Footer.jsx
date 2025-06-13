import React from 'react';
import "./Stylemid.css";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
      <div>
          
          <div className="container-fluid gx-0" style={{backgroundColor:'#dee1e9'}}>
              <div className="row gx-0">
                  <div className="col-lg-4 col-md-6 col-12 foot1" style={{padding:'20px',textAlign:'start'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56027.472863920026!2d76.99881562167968!3d28.638241100000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04eed594d2e7%3A0xe502ac2f57c4ec3b!2sDiwan%20Associates!5e0!3m2!1sen!2sin!4v1749638310431!5m2!1sen!2sin" width="100%" height="300px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="Diwan Associates Location"></iframe>

</div>

                  <div className="col-lg-2 col-md-6 col-12 foot" style={{ textAlign: 'start',padding:'20px' }}>
  <h3 style={{ marginBottom: '10px', color: '#0629a7', fontWeight: '600' }}>
    Information
  </h3>

  <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0', lineHeight: '30px', color: 'black', fontWeight: '500' }}>
              <Link to='/' style={{textDecoration:'none',color:'black'}}>
              <li>Home</li>
              </Link>
              <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
              <li>About Us</li>
              </Link>
    <Link to='/join' style={{ textDecoration: 'none', color: 'black' }}><li>Join Our Team</li></Link>
    <Link to='/blog' style={{ textDecoration: 'none', color: 'black' }}><li>Blog</li></Link>
    <Link to='/privacy' style={{ textDecoration: 'none', color: 'black' }}><li>Privacy Policy</li></Link>
    <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}><li>Contact Us</li></Link>
    
  </ul>
</div>

                  <div className="col-lg-3 col-md-6 col-12 foot" style={{textAlign:'start',padding:'20px'}}>
                     <div>
  <h3 style={{ marginBottom: '30px', color:'#0629a7', fontWeight: '600' }}>Get In Touch</h3>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-location-dot" style={{ color: '#0629a7', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'black', marginBottom: '5px' }}>Address</h5>
      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        WZ-187, First Floor, Budella, <br />Vikaspuri,New Delhi
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-envelope" style={{ color: '#0629a7', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'black', marginBottom: '5px' }}>Mail Us</h5>
      <a href="mailto:info.diwanassociates@gmail.com" style={{ textDecoration: 'none' }}>
  <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
    info.diwanassociates@gmail.com
  </p>
</a>

    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
    <i className="fa-solid fa-phone-volume" style={{ color: '#0629a7', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'black', marginBottom: '5px' }}>Phone</h5>
      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        +91 9806542215
      </p>
    </div>
  </div>
</div>

                  </div>
                  <div className="col-lg-3 col-md-6 col-12 foot1" style={{textAlign:'start',padding:'20px'}}>
                      <h3 style={{ marginBottom: '30px', color:'#0629a7', fontWeight: '600' }}>Contact Us</h3>
                      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        Reach Us & Recive Our Offers and <br /> Updates in Your Inbox Directly.


            </p>
            {/* <div style={{ display: 'flex', alignItems: 'center', maxWidth: '350px', backgroundColor: '#fff', borderRadius: '5px', overflow: 'hidden', marginTop: '20px' }}> */}
  <a href="/contact" id='gettouch'>
              <button 
                style={{
                  width: "150px",
                  height: "40px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  backgroundColor: '#0629a7',
                  color:'white',
                  fontWeight: "500",
                  marginTop: "30px",
                  marginBottom:'20px'
                }}
              >
                Get In Touch
                <i className="fa-solid fa-arrow-right ps-2" id='gettouch'></i>
              </button>
              </a>
{/* </div> */}


<div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <a href="https://www.facebook.com/people/Diwan-Associates/100086457826196/?mibextid=wwXIfr&rdid=0duGt0K1yBCZSicm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ESCfFaZKa%2F%3Fmibextid%3DwwXIfr" 
  target="_blank" 
  rel="noopener noreferrer"
>
                <i className="fa-brands fa-facebook-f" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
  </a>
  
              <a href="https://www.instagram.com/diwan_associates/" 
  target="_blank" 
  rel="noopener noreferrer">
                <i className="fa-brands fa-instagram" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer' ,marginLeft:'25px'}}></i>
  </a>
  <a href="https://www.linkedin.com/company/diwan-associatesinsurance/" 
  target="_blank" 
  rel="noopener noreferrer"><i className="fa-brands fa-linkedin" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i></a>
  
</div>


                  </div>
              </div>
<div className="row m-0" style={{ backgroundColor: '#0629a7', padding: '15px 0', overflowX: 'hidden' }}>
  <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-center" style={{ gap: '20px', padding: '0 15px' }}>
    <a href="/privacy" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</a>
    <span style={{ color: '#fff', fontSize: '14px' }}>&copy; {new Date().getFullYear()} Diwan Associates. All rights reserved.</span>
  </div>
</div>


          </div>

          


    </div>
  )
}
