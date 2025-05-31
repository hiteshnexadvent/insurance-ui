import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import './StylePage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PageFooter from './PageFooter';


export default function Blogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchapi=async () => {
            try {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/admin/manage-blogapi`, {
                withCredentials: true
              });
              setBlogs(response.data);
          }
            catch (err) {
              console.log(err);
          }
      }
      fetchapi();
    }, [])
  
  if (!blogs) return <div>Loading dashboard...</div>;

  return (
      <div>

      <div id='blogs'>

        <h1 style={{ paddingTop: '300px', fontSize: '4rem', fontWeight: '700' }}>Blogs</h1>
        <h6 style={{ color: "#9fa39a",paddingTop:'20px',paddingBottom:'100px' }}>HOME &gt; BLOGS</h6>
        
      <Navbar></Navbar>


      
          

          

      </div>
 {/* Blog Cards Section */}
      <Link
  to="/blogread"                  
  style={{
    fontSize: '0.9rem',
    fontWeight: '600',
    lineHeight: '20px',
    textDecoration: 'none',          // underline hatana
    borderBottom: '2px solid black', // custom underline
    paddingBottom: '0px',            // line aur text ke beech gap
    color: 'black'                   // optional: link color
  }}
>
      <div className="container py-2">
        <h2 className="text-center mb-4" style={{fontSize:'3.5rem',fontWeight:'600',color:'#019785'}}>Available Blogs</h2>
        <div className="row">
          {blogs.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card h-100 shadow" style={{border:'1px solid #8d9094',padding:'20px',width:'300px'}} id='blog-cards'>
                <img 
                  src={`${process.env.REACT_APP_API_URL}${item.image[0]}`} 
                  className="card-img-top" 
                  alt={item.title} 
                  style={{ height:'250px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{textAlign:'start',lineHeight:'60px'}}>
                  <h5 className="card-title" style={{lineHeight:'35px',fontSize:'1.4rem'}}>{item.title}</h5>
                  {/* <p className="card-text">{item.desc}</p> */}

                  <h5 style={{
    fontSize: '0.9rem',
    fontWeight: '600',
    lineHeight: '20px',
    borderBottom: '2px solid black', 
                    paddingBottom: '0px',
    paddingTop:'30px',
                    color: 'black',
    width:'85px'
  }}>READ MORE</h5>


                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </Link>

<Link
  to="/blogread"                  
  style={{
    fontSize: '0.9rem',
    fontWeight: '600',
    lineHeight: '20px',
    textDecoration: 'none',          // underline hatana
    borderBottom: '2px solid black', // custom underline
    paddingBottom: '0px',            // line aur text ke beech gap
    color: 'black'                   // optional: link color
  }}
>
      <div className="container py-2">
        <h2 className="text-center mb-4" style={{fontSize:'3.5rem',fontWeight:'600',color:'#019785'}}>Available Blogs</h2>
        <div className="row">
          {blogs.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="card h-100 shadow" style={{border:'1px solid #8d9094',padding:'20px',width:'300px'}} id='blog-cards'>
                <img 
                  src={`${process.env.REACT_APP_API_URL}${item.image[0]}`} 
                  className="card-img-top" 
                  alt={item.title} 
                  style={{ height:'250px', objectFit: 'cover' }}
                />
                <div className="card-body" style={{textAlign:'start',lineHeight:'60px'}}>
                  <h5 className="card-title" style={{lineHeight:'35px',fontSize:'1.4rem'}}>{item.title}</h5>
                  {/* <p className="card-text">{item.desc}</p> */}

                  <h5 style={{
    fontSize: '0.9rem',
    fontWeight: '600',
    lineHeight: '20px',
    borderBottom: '2px solid black', 
                    paddingBottom: '0px',
    paddingTop:'30px',
                    color: 'black',
    width:'85px'
  }}>READ MORE</h5>


                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
        </Link>

      <PageFooter></PageFooter>

      
    </div>
  )
}


      