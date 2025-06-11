import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import './StylePage.css'
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';


export default function JoinTeam() {
    

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
      
       {/* Helmet for title and favicon */}
      <Helmet>
        <title>Diwan Associates</title>
        <link rel="icon" type="image/png" href="/images/logo.png?v=123" />
        <meta name="description" content="This is our homepage." />
      </Helmet>
          

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
                          Join Our Team
                        </h1>
                        <h6
                          style={{
                            color: "#9fa39a",
                            paddingTop: "20px",
                            paddingBottom: "100px",
                          }}
                        >
                          HOME &gt; JOIN OUR TEAM
                        </h6>
                
                        <Navbar></Navbar>
                      </div>


          <div className="container">
              <div className="row" style={{marginTop:'60px'}}>
                  <div className="col-lg-6 col-12 join">
                      <h1 style={{fontWeight:'700',marginTop:'10px'}}>Join Our Team</h1>
                      <p style={{fontWeight:'400',marginTop:'20px'}}>At Diwan Associates, we believe in transforming potential into success. Whether you're a freelancer, housewife, student, or part-time professional, we provide a platform where you can build a rewarding career in life insurance—on your terms. By joining our team, you gain access to expert training, dedicated support, and industry-leading tools that empower you to grow both personally and professionally. We don’t just hire advisors — we nurture future leaders. Join us and be a part of a mission-driven network that's helping families across India secure their future. Our advisors enjoy flexible working hours, unlimited income potential, and continuous growth opportunities. With over 1,000 active advisors across India, you're never alone—we grow together. If you’re ready to make a difference and build a purposeful career, Diwan Associates is the right place for you.
</p>
                  </div>
                  <div className="col-lg-6 col-12 join-img">
                      <img src="/images/join1.avif" alt="" style={{width:'100%'}}/>
                  </div>
              </div>

          </div>


          <div className="container">
              <div className="row gx-0 mt-5 fund">
                  <h1 style={{fontSize:'3rem',fontWeight:'900'}}>Before <span style={{color:'#0629a7'}}>Success</span> ,There is <span style={{color:'#0629a7'}}>Diwan Associates</span>. </h1>
                  <div className="col-12 fund-img">
                      <img src="/images/joinin.avif" alt="" className='img-fluid' style={{width:'100%',height:'80vh',marginTop:'40px',borderRadius:'40px'}}/>
                  </div>
              </div>

             <div className="row">
  <div
    className="col-12 vent"
    style={{
      position: 'relative',
      fontSize: '18px',
      lineHeight: 1.5,
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px 40px',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
            }}
            
  >
    <span
      style={{
        position: 'absolute',
        fontSize: '80px',
        fontWeight: 'bold',
        color: '#007bff',
        fontFamily: 'serif',
        opacity: 0.2,
        userSelect: 'none',
        top: 0,
        left: 10,
      }}
    >
      &ldquo;
    </span>

    At Diwan Associates, we onboard less than 1% of the advisors we meet. Every year, we invest 15 thousand hours to evaluate talent, guide career growth, and build a strong network. This ensures high success and lasting impact.

    <span
      style={{
        position: 'absolute',
        fontSize: '80px',
        fontWeight: 'bold',
        color: '#007bff',
        fontFamily: 'serif',
        opacity: 0.2,
        userSelect: 'none',
        bottom: 0,
        right: 10,
      }}
    >
      &rdquo;
    </span>
  </div>
</div>

        {/* ------------------------- row 1 for cards */}

        <div className="row gx-0 mt-5 invest">
                  <h1 style={{fontSize:'3rem',fontWeight:'900'}}>Invest In <span style={{color:'#0629a7'}}>What</span> ,Comes <span style={{color:'#0629a7'}}>Next</span>. </h1>
                  <div className="col-lg-4 col-md-6 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>IRDAI Exam Prep (Online & Offline)
</h3>
              <img src="/images/img1.avif" alt="" className='img-fluid' style={{height:'130px'}}/>
              
            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Advanced Tools Access
</h3>
              <img src="/images/img2.avif" className='img-fluid' alt="" style={{height:'130px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>1:1 Sales Call Support
</h3>
              <img src="/images/img3.avif" className='img-fluid' alt="" style={{height:'130px'}}/>

            </div>
            
            
            

          </div>
              {/* </div> */}
        

        {/* -------------------------------- row 2 for cards */}

        {/* <div className="row gx-0 mt-5">    */}
              <div className="col-lg-4 col-md-6 col-12 mt-4">
            <div className="card1" style={{border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Pan-India Branch Support
</h3>
              <img src="/images/img4.avif" alt="" className='img-fluid' style={{height:'130px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4">

            <div className="card1" style={{border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Post-Certification Product Training</h3>
              <img src="/images/img5.avif" alt="" style={{height:'130px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-6 col-12 mt-4">

            <div className="card1" style={{border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px',height:'32vh'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Dedicated <br />Mentor <br /> Guidance</h3>
              <img src="/images/img6.avif" alt="" style={{height:'130px'}}/>

            </div>
            
            
            

          </div>
              </div>
        
        {/* -------------------------------- how to join */}
<div className="row pb-4" style={{marginTop:'70px'}}>
  <h1 style={{fontWeight:'700'}}>How To Join?</h1>

  <div className="col-lg-4 col-12 join-help" style={{marginTop:'50px',lineHeight:'25px', borderRight: '1px solid #ccc'}}>
    <div style={{color:'#0629a7',fontSize:'3rem',fontWeight:'700'}}>1.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}>Apply</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Submit an application to become a Life Insurance Advisor with Diwan Associates. It takes around 2 minutes.
</div>
  </div>

  <div className="col-lg-4 col-12 join-help" style={{marginTop:'50px',lineHeight:'30px', borderRight: '1px solid #ccc'}}>
    <div style={{color:'#0629a7',fontSize:'3rem',fontWeight:'700'}}>2.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}> Attend Orientation
</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Join our online or offline session to understand the business model and opportunities. It’s informative and beginner-friendly.
</div>
  </div>

  <div className="col-lg-4 col-12 join-help" style={{marginTop:'50px',lineHeight:'30px'}}>
    <div style={{color:'#0629a7',fontSize:'3rem',fontWeight:'700'}}>3.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}>Get Certified
</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Complete your IRDAI documentation, appear for the exam, and start your journey as a certified life insurance advisor.
</div>
  </div>
</div>

{/* <button style={{ width: '140px', padding: '10px', border: 'none', borderRadius:'20px',color:'white',background:'#0629a7',marginTop:'30px'}}>Download</button> */}

      </div>

      <div className="container">
         <div className="row" style={{marginTop:'60px'}}>
          <h1 style={{fontWeight:'700',fontSize:'3rem',color:'#0629a7'}}>Our Criteria</h1>
          <p style={{fontWeight:'500',fontSize:'1.5rem'}}>Here's what we look for in individuals we onboard
</p>
        <div className="col-lg-4 col-md-4 col-12 crit" style={{marginTop:'25px'}}>

          <div className="card2" style={{border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f',height:'35vh'}}>

              <h3 style={{fontWeight:'700'}}>Driven Professionals
</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>We’re looking for passionate individuals who are goal-oriented and eager to build a career in life insurance.
</p>
            </div>
          

          </div>
          
          <div className="col-lg-4 col-md-4 col-12 crit" style={{marginTop:'25px'}}>
<div className="card2" style={{border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f',height:'35vh'}}>

              <h3 style={{fontWeight:'700'}}>Strong Communication Skills
</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>Advisors must be able to clearly explain policies and connect with clients effectively.
</p>
            </div>
          

          </div>
          
          <div className="col-lg-4 col-md-4 col-12 crit" style={{marginTop:'25px'}}>

          <div className="card2" style={{border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f',height:'35vh'}}>

              <h3 style={{fontWeight:'700'}}>Commitment to Growth
</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>We value individuals committed to learning, upskilling, and growing within the Diwan Associates ecosystem.</p>
            </div>
          

        </div>

      </div>
      </div>
      
      <div style={{marginTop:'50px'}}>
        <Footer></Footer>
      </div>
     
               
          


    </div>
  )
}
