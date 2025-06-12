import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from 'react-helmet';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import axios from "axios";
import Swal from 'sweetalert2';
import Navbar from '../components/Navbar';



export default function Booking() {

  const [formData, setformData] = useState({ date: '', time: '', name: '', email: '', mobile: '', city: '' });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleDateChange = (date) => {
  const readableDate = date.toDateString(); // e.g., "Mon Jun 17 2025"
  setformData(prev => ({ ...prev, date: readableDate }));
};



  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/admin/schedule`,
      formData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );

    if (response.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Meeting Scheduled',
        text: response.data.message,
        confirmButtonColor: '#3085d6'
      });
      setformData({ date: '', time: '', name: '', email: '', mobile: '', city: '' });
    }

  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: err.response?.data?.message || "Something went wrong",
      confirmButtonColor: '#d33'
    });
  }
};


  return (
    <div>

      {/* <Navbar></Navbar> */}

      {/* Helmet for title and favicon */}
            <Helmet>
              <title>Diwan Associates</title>
              <link rel="icon" type="image/png" href="/images/logo.png?v=123" />
              <meta name="description" content="This is our homepage." />
            </Helmet>
      
      <div className="container">
        <div className="row" style={{marginTop:'100px',backgroundColor:'#d5d6da'}}>
          <div className="col-lg-6 col-12" style={{textAlign:'start',padding:'50px'}}>
            <h3 >Diwan Associates</h3>
            <h1 style={{paddingTop:'30px',color:'#0629a7'}}>Discovery Meeting | Insurance Advisors</h1>
            <p style={{paddingTop:'30px'}}><i class="fa-solid fa-clock"></i> 1 hr</p>
            <p> <i class="fa-solid fa-video"></i> Web conferencing details provided upon confirmation.</p>
            <h5 style={{paddingTop:'30px',fontWeight:'600',color:'#0629a7'}}>Insurance Discovery Call with Diwan Associates</h5>
            <p style={{paddingTop:'20px'}}> Diwan Associates is a trusted advisory firm specializing in business growth strategies, financial consulting, and legal advisory. Our mission is to empower entrepreneurs and startups with expert guidance and customized solutions.</p>
          </div>

          <div className="col-lg-6 col-12" style={{padding:'50px',textAlign:'start'}}>

            {/* calender */}

          <h2>Schedule A Meeting</h2>
            
            <form onSubmit={handleSubmit} style={{ 
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  background: '#f9f9f9',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
}}>
  
  <Calendar onChange={handleDateChange} value={formData.date} />

  <label><b>Meeting Time:</b></label>
  <select
    name="time"
    onChange={handleChange}
    value={formData.time}
    required
    style={{
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px'
    }}
  >
    <option value="">Select Time</option>
    <option value="10:30 AM">10:30 AM</option>
    <option value="11:30 AM">11:30 AM</option>
    <option value="12:30 PM">12:30 PM</option>
    <option value="01:30 PM">01:30 PM</option>
    <option value="02:30 PM">02:30 PM</option>
    <option value="03:30 PM">03:30 PM</option>
    <option value="04:30 PM">04:30 PM</option>
    <option value="05:30 PM">05:30 PM</option>
    <option value="06:30 PM">06:30 PM</option>
  </select>

  <input type="text" name="name" onChange={handleChange} value={formData.name} required placeholder="Name"
    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />

  <input type="email" name="email" onChange={handleChange} value={formData.email} required placeholder="Email"
    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />

  <input type="tel" name="mobile" onChange={handleChange} value={formData.mobile} required placeholder="Mobile"
    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />

  <input type="text" name="city" onChange={handleChange} value={formData.city} required placeholder="City/State"
    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />

  <button type="submit"
    style={{
      padding: '12px',
      backgroundColor: '#0629a7',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer'
    }}>
    Schedule
  </button>

</form>


          </div>


        </div>
      </div>
          
         
    </div>
  );
}



