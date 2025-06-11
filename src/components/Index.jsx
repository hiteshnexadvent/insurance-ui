import React from 'react';
import Navbar from './Navbar'
import Main from './Main'
import MidContent from './MidContent'
import Footer from './Footer'
import { Helmet } from 'react-helmet';


export default function Index() {
  return (
       <div>
      {/* Helmet for title and favicon */}
      <Helmet>
        <title>Diwan Associates</title>
        <link rel="icon" type="image/png" href="/images/logo.png?v=123" />
        <meta name="description" content="This is our homepage." />
      </Helmet>

      <Navbar />
      <Main />
      <MidContent />
      <Footer />
    </div>
  )
}
