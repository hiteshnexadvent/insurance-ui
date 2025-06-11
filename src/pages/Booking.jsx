import { useEffect } from 'react';
import { Helmet } from 'react-helmet';


export default function Booking() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
      <div>
          
          {/* Helmet for title and favicon */}
                <Helmet>
                  <title>Diwan Associates</title>
                  <link rel="icon" type="image/png" href="/images/logo.png?v=123" />
                  <meta name="description" content="This is our homepage." />
                </Helmet>

      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-6">
            <h4>Diwan Associates</h4>
                      <h1>Discovery Meeting</h1>
                      <p>
        Diwan Associates is a trusted advisory firm specializing in business growth strategies,
        financial consulting, and legal advisory. Our mission is to empower entrepreneurs and 
        startups with expert guidance and customized solutions.
      </p>
          </div> */}

          <div className="col-lg-12">
            {/* Calendly inline widget */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hitesh-nexadvent/30min"
              style={{ minWidth: '320px', height: '700px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}



