import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import PageFooter from './PageFooter';
import './StylePage.css'

export default function JoinTeam() {
    

      const [cover, setCover] = useState(null);
    

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
              <div className="row mt-5">
                  <div className="col-lg-6 col-12">
                      <h1 style={{fontWeight:'700',marginTop:'10px'}}>Join Our Team</h1>
                      <p style={{fontWeight:'400',marginTop:'20px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti, optio quisquam voluptates adipisci minus praesentium deserunt quibusdam nesciunt iusto modi possimus voluptatum vel, quaerat inventore sed labore eos tempore sint magni cumque maxime doloribus repellat vitae. Eligendi autem repudiandae, quasi optio eos sint dignissimos neque debitis distinctio nihil deserunt veniam commodi quas, iusto dolores. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nostrum dignissimos recusandae nulla pariatur eius officiis repellat deleniti vitae aut aspernatur, atque dolore assumenda consequatur, sunt maxime. Nostrum aut incidunt, adipisci natus est veniam sunt fuga amet exercitationem, in nihil?</p>
                  </div>
                  <div className="col-lg-6 col-12">
                      <img src="/images/join1.avif" alt="" style={{width:'100%'}}/>
                  </div>
              </div>

          </div>


          <div className="container">
              <div className="row gx-0 mt-5">
                  <h1 style={{fontSize:'3rem',fontWeight:'900'}}>Before <span style={{color:'#019785'}}>FUNDING</span> ,There is <span style={{color:'#019785'}}>FINDING</span>. </h1>
                  <div className="col-12">
                      <img src="/images/join2.jpg" alt="" style={{width:'100%',marginTop:'40px'}}/>
                  </div>
              </div>

             <div className="row">
  <div
    className="col-12"
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

    Venture funds invest in less than 1% of the companies they meet. Every year we spend 15 thousand hours to analyze investment opportunities and choose the best. This ensures high returns.

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

        <div className="row gx-0 mt-5">
                  <h1 style={{fontSize:'3rem',fontWeight:'900'}}>Invest In <span style={{color:'#019785'}}>What</span> ,Comes <span style={{color:'#019785'}}>Next</span>. </h1>
                  <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" alt="" className='img-fluid' style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" className='img-fluid' alt="" style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{width:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" className='img-fluid' alt="" style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
              </div>
        

        {/* -------------------------------- row 2 for cards */}

        <div className="row gx-0 mt-5">
                 
                  <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{height:'220px',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" alt="" style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{height:'220px',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" alt="" style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
          <div className="col-lg-4 col-md-12 col-12 mt-4">

            <div className="card1" style={{height:'220px',border:'1px solid #c7d4e0',borderRadius:'20px',display:'flex',paddingTop:'25px',marginLeft:'10px'}}>

              <h3 style={{textAlign:'start',paddingLeft:'5px',fontWeight:'700'}}>Starts Investing from 500000</h3>
              <img src="/images/join3.png" alt="" style={{height:'180px'}}/>

            </div>
            
            
            

          </div>
              </div>
        
        {/* -------------------------------- how to join */}
<div className="row mt-5 pb-4">
  <h1 style={{fontWeight:'700'}}>How To Join?</h1>

  <div className="col-lg-4 col-12" style={{marginTop:'20px',lineHeight:'25px', borderRight: '1px solid #ccc'}}>
    <div style={{color:'#019785',fontSize:'3rem',fontWeight:'700'}}>1.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}>Apply</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Submit an application to join the Syndicate. It takes around 2 minutes.</div>
  </div>

  <div className="col-lg-4 col-12" style={{marginTop:'20px',lineHeight:'30px', borderRight: '1px solid #ccc'}}>
    <div style={{color:'#019785',fontSize:'3rem',fontWeight:'700'}}>2.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}>Recieve Dealflow</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Submit an application to join the Syndicate. It takes around 2 minutes.</div>
  </div>

  <div className="col-lg-4 col-12" style={{marginTop:'20px',lineHeight:'30px'}}>
    <div style={{color:'#019785',fontSize:'3rem',fontWeight:'700'}}>3.</div>
    <div style={{fontSize:'2rem',fontWeight:'700',marginTop:'30px'}}>Invest</div>
    <div style={{marginTop:'30px',fontWeight:'500'}}>Submit an application to join the Syndicate. It takes around 2 minutes.</div>
  </div>
</div>

<button style={{ width: '140px', padding: '10px', border: 'none', borderRadius:'20px',color:'white',background:'#019785'}}>Download</button>

      </div>

      <div className="container">
         <div className="row mt-5">
          <h1 style={{fontWeight:'700',fontSize:'3rem'}}>Our Criteria</h1>
          <p style={{fontWeight:'500',fontSize:'1.5rem'}}>Here's what we look for in deals we Syndicate</p>
        <div className="col-lg-4 col-md-4 col-12">

          <div className="card2" style={{height:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f'}}>

              <h3 style={{fontWeight:'700'}}>Indian-origin Deals</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>Startups founded by individuals who are originally Indian resident, with operations that span across the globe.</p>
            </div>
          

          </div>
          
          <div className="col-lg-4 col-md-4 col-12">
<div className="card2" style={{height:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f'}}>

              <h3 style={{fontWeight:'700'}}>Indian-origin Deals</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>Startups founded by individuals who are originally Indian resident, with operations that span across the globe.</p>
            </div>
          

          </div>
          
          <div className="col-lg-4 col-md-4 col-12">

          <div className="card2" style={{height:'auto',border:'1px solid #c7d4e0',borderRadius:'20px',paddingTop:'25px',backgroundColor:'#0000001f'}}>

              <h3 style={{fontWeight:'700'}}>Indian-origin Deals</h3>
              <p style={{fontWeight:'400',padding:'10px 30px 30px 30px'}}>Startups founded by individuals who are originally Indian resident, with operations that span across the globe.</p>
            </div>
          

        </div>

      </div>
      </div>
      
      <PageFooter></PageFooter>
     
               
          


    </div>
  )
}
