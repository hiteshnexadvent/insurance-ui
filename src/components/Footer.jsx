import React from 'react';
import "./Stylemid.css";


export default function Footer() {
  return (
      <div>
          
          <div className="container-fluid gx-0" style={{backgroundColor:'#dee1e9'}}>
              <div className="row gx-0">
                  <div className="col-lg-4 col-md-6 col-12 foot1" style={{padding:'20px',textAlign:'start'}}>
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.528062285756!2d-122.41941548468199!3d37.77492927975902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f74c913e3%3A0xd71a6c7dc827a87!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
    width="100%"
    height="80%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

</div>

                  <div className="col-lg-2 col-md-6 col-12 foot" style={{ textAlign: 'start',padding:'20px' }}>
  <h3 style={{ marginBottom: '10px', color: '#0629a7', fontWeight: '600' }}>
    Information
  </h3>

  <ul style={{ listStyle: 'none', paddingLeft: '0', margin: '0', lineHeight: '30px', color: 'black', fontWeight: '500' }}>
    <li>Services</li>
    <li>Infrastructure</li>
    <li>Client Support</li>
    <li>Privacy Policy</li>
    <li>Professionals</li>
    <li>HR Solutions</li>
    <li>Insights</li>
  </ul>
</div>

                  <div className="col-lg-2 col-md-6 col-12 foot" style={{textAlign:'start',padding:'20px'}}>
                     <div>
  <h3 style={{ marginBottom: '30px', color:'#0629a7', fontWeight: '600' }}>Get In Touch</h3>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-location-dot" style={{ color: '#0629a7', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'black', marginBottom: '5px' }}>Address</h5>
      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        280 Granite Run Drive <br /> Suite Lancaster
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-envelope" style={{ color: '#0629a7', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'black', marginBottom: '5px' }}>Mail Us</h5>
      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        sendmail@creote.com
      </p>
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
                  <div className="col-lg-4 col-md-6 col-12 foot1" style={{textAlign:'start',padding:'20px'}}>
                      <h3 style={{ marginBottom: '30px', color:'#0629a7', fontWeight: '600' }}>Subscribe Us</h3>
                      <p style={{ lineHeight: '30px', color: 'black', fontWeight: '500', margin: 0 }}>
        Subscribe Us & Recive Our Offers and <br /> Updates i Your Inbox Directly.


                      </p><div style={{ display: 'flex', alignItems: 'center', maxWidth: '350px', backgroundColor: '#fff', borderRadius: '5px', overflow: 'hidden', marginTop: '20px' }}>
  <input
    type="email"
    placeholder="Enter your email"
    style={{
      flex: 1,
      border: 'none',
      padding: '10px 15px',
      outline: 'none',
      fontSize: '16px'
    }}
  />
  <button
    type="submit"
    style={{
      backgroundColor:'#0629a7',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      cursor: 'pointer',
      fontWeight: '500',
      whiteSpace: 'nowrap'
    }}
  >
    Sign Up
  </button>
</div>

<p style={{ color: 'black', fontSize: '14px', marginTop: '10px' }}>*We do not share your email id</p>

<div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
  <i className="fa-brands fa-facebook-f" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
  <i className="fa-brands fa-instagram" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer' ,marginLeft:'25px'}}></i>
  <i className="fa-brands fa-twitter" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
  <i className="fa-brands fa-skype" style={{ color: '#0629a7', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
</div>


                  </div>
              </div>
<div className="row m-0" style={{ backgroundColor: '#0629a7', padding: '15px 0', overflowX: 'hidden' }}>
  <div className="col-12 d-flex flex-wrap justify-content-center align-items-center text-center" style={{ gap: '20px', padding: '0 15px' }}>
    <a href="https://example.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</a>
    <a href="https://example.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Sitemap</a>
    <a href="https://example.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>Careers</a>
    <span style={{ color: '#fff', fontSize: '14px' }}>&copy; {new Date().getFullYear()} Creote. All rights reserved.</span>
  </div>
</div>


          </div>

          


    </div>
  )
}
