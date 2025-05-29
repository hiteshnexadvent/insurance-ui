import React from 'react';
import Navbar from './Navbar'
import Main from './Main'
import MidContent from './MidContent'
import Footer from './Footer'

export default function Index() {
  return (
      <div>
          
          <Navbar></Navbar>
          <Main></Main>
      <MidContent></MidContent>
      <Footer></Footer>

    </div>
  )
}
