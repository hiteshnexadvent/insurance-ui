import React from 'react';

export default function Footer() {
  return (
      <div>
          
          <div className="container-fluid gx-0" style={{backgroundColor:'#4A4E56'}}>
              <div className="row gx-0">
                  <div className="col-lg-4" style={{padding:'20px',textAlign:'start'}}>
  <h3 style={{marginBottom:'30px',color:'white',fontWeight:'600'}}>Our Works</h3>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <img src="/images/project4.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
    <img src="/images/project1.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
    <img src="/images/project2.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
    <img src="/images/project3.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
    <img src="/images/project5.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
    <img src="/images/project6.jpg" alt="" style={{ width: '28%', margin: '5px', borderRadius: '5px' }} />
                      </div>
                      <button style={{backgroundColor:'#019785',color:'white',width:'150px',height:'50px',fontSize:'0.8rem',fontWeight:'500',border:'none',marginTop:'20px'}}>VIEW ALL WORKS</button>
</div>

                  <div className="col-lg-2" style={{textAlign:'start',padding:'20px'}}>
                      <h3 style={{ marginBottom: '30px', color: 'white', fontWeight: '600' }}>Information</h3>
                      
                      <ul style={{listStyle:'none',lineHeight:'30px',color:'#9d9fa8',fontWeight:'500'}}>
                          <li>Services</li>
                          <li>Infrastructure</li>
                          <li>Client Support</li>
                          <li>Privacy Policy</li>
                          <li>Professionals</li>
                          <li>HR Solutions</li>
                          <li>Insights</li>
                          
                      </ul>

                  </div>
                  <div className="col-lg-2" style={{textAlign:'start',padding:'20px'}}>
                     <div>
  <h3 style={{ marginBottom: '30px', color: 'white', fontWeight: '600' }}>Get In Touch</h3>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-location-dot" style={{ color: '#fff', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'white', marginBottom: '5px' }}>Address</h5>
      <p style={{ lineHeight: '30px', color: '#9d9fa8', fontWeight: '500', margin: 0 }}>
        280 Granite Run Drive <br /> Suite Lancaster
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '20px' }}>
    <i className="fa-solid fa-envelope" style={{ color: '#fff', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'white', marginBottom: '5px' }}>Mail Us</h5>
      <p style={{ lineHeight: '30px', color: '#9d9fa8', fontWeight: '500', margin: 0 }}>
        sendmail@creote.com
      </p>
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
    <i className="fa-solid fa-phone-volume" style={{ color: '#fff', fontSize: '18px', marginTop: '5px' }}></i>
    <div>
      <h5 style={{ color: 'white', marginBottom: '5px' }}>Phone</h5>
      <p style={{ lineHeight: '30px', color: '#9d9fa8', fontWeight: '500', margin: 0 }}>
        +91 9806542215
      </p>
    </div>
  </div>
</div>

                  </div>
                  <div className="col-lg-4" style={{textAlign:'start',padding:'20px'}}>
                      <h3 style={{ marginBottom: '30px', color: 'white', fontWeight: '600' }}>Subscribe Us</h3>
                      <p style={{ lineHeight: '30px', color: '#9d9fa8', fontWeight: '500', margin: 0 }}>
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
      backgroundColor: '#019785',
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

<p style={{ color: '#ccc', fontSize: '14px', marginTop: '10px' }}>*We do not share your email id</p>

<div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
  <i className="fa-brands fa-facebook-f" style={{ color: '#fff', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
  <i className="fa-brands fa-instagram" style={{ color: '#fff', fontSize: '25px', cursor: 'pointer' ,marginLeft:'25px'}}></i>
  <i className="fa-brands fa-twitter" style={{ color: '#fff', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
  <i className="fa-brands fa-skype" style={{ color: '#fff', fontSize: '25px', cursor: 'pointer',marginLeft:'25px' }}></i>
</div>


                  </div>
              </div>
<div className="row m-0" style={{ backgroundColor: '#019785', padding: '15px 0', overflowX: 'hidden' }}>
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
