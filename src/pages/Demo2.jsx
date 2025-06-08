/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Navbar main container - default background */
#nav-cont1 {
  background-color: #078586;
  width: 100%;
  padding: 10px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  flex-wrap: wrap;
}

.contact-item p {
  color: #ddd0d0;
  font-weight: 500;
  margin: 0;
  font-size: 14px;
}

.navbar {
  height: 100px;
}

.navbar ul {
  margin-left: 100px;
}

#search:hover {
  cursor: pointer;
}

/* Tablet view */
@media (min-width: 768px) and (max-width: 1180px) {
  .nav-cont2 {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-left: 20px !important;
  }

  .address-item,
  .icon-address,
  .nav-address,
  .nav-cont3 {
    display: none !important;
  }

  .contact-item {
    width: 100%;
    padding-left: 20px;
  }

  .navbar {
    height: auto;
  }
}


/* Navbar sticky behavior */
.navbar ul {
  margin-left: 0;
}

.navbar-fixed.sticky #nav-cont1 {
  display: none;
}

.navbar-fixed.sticky .navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.navbar-fixed.sticky > .container {
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.navbar-fixed.sticky .navbar-brand {
  padding-left: 15px;
}

.navbar-fixed.sticky .navbar-nav {
  padding-left: 10px;
}

.navbar-fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

@media (max-width: 450px) and (min-width: 375px) {
  .no-top-margin {
    margin-top: 0 !important;
  }
}

/* Carousel wrapper */
 #carousel-wrapper {
  height: 580px !important;
}

.custom-caption {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  max-width: 90%;
  word-wrap: break-word;
  overflow-wrap: break-word;
  padding: 0 15px;
}

.custom-caption h1 {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  margin-top: 50px;
}

.custom-caption p {
  font-size: 1.2rem;
  margin: 15px 0;
}

.custom-caption button {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

.custom-caption .btn-primary {
  background-color: #00b894;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  transition: 0.3s;
  width: 150px;
}

.custom-caption .btn-primary:hover {
  background-color: #019875;
  transform: scale(1.05);
}

.custom-caption .btn-outline-light {
  border: 2px solid white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  color: white;
  background: transparent;
  transition: 0.3s;
  margin-left: 10px;
}

.custom-caption .btn-outline-light:hover {
  background-color: white;
  color: #000;
  transform: scale(1.05);
}



/* Cards */
.custom-card {
  position: relative;
  padding: 30px 20px;
  transition: all 0.4s ease;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.card-number {
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 3.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.1);
  z-index: 0;
}

.custom-card-overlay {
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #019875;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 1.2s ease;
  z-index: 5;
  border-radius: 10px;
}

.custom-card:hover .custom-card-overlay {
  top: 0;
}

.overlay-text {
  color: white;
  font-weight: bold;
  font-size: 1.3rem;
  opacity: 0;
  transition: opacity 0.5s ease 1s;
  pointer-events: none;
}

.custom-card:hover .overlay-text {
  opacity: 1;
}

.icon-wrapper {
  z-index: 1;
  width: 60px;
  height: 60px;
  margin: 0 auto 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.custom-card:hover .icon-wrapper {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.read-more {
  opacity: 0;
  margin-top: 15px;
  font-weight: 500;
  color: #0d6efd;
  transition: opacity 0.4s ease, transform 0.4s ease;
  transform: translateY(10px);
}

.custom-card:hover .read-more {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 375px) and (max-width: 450px) {
  /* #carousel-wrapper {
    margin-top: 163px;
    height: 280px !important;
  } */
  #carousel-wrapper {
    height: auto !important;
  }
    #carousel-wrapper img{
    height: 500px !important;
  }
  .custom-caption {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 95%;
    padding: 0 8px;
  }

  .custom-caption h1 {
    font-size: 1rem;
    line-height: 1.3;
  }

  .custom-caption p {
    font-size: 0.9rem;
  }

  .custom-caption button {
    font-size: 0.8rem;
    padding: 10px 20px;
    width: 150px;
    border-radius: 25px;
    /* display: none; */
  }

  .custom-caption div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
}

@media (min-width: 768px) and (max-width: 1025px) {
  #carousel-wrapper {
    height: auto !important;
  }
    #carousel-wrapper img{
    height: 700px !important;
  }

  .custom-caption {
   position: absolute;
   top: -420px;
  }
  .carousel-control-prev{
    margin-top: 200px;
  }
  .carousel-control-next{
    margin-top: 200px;
  }
}


/* Mobile devices */
@media (max-width: 767px) {
  #nav-cont1 {
    background-color: #000;
    width: 100vw;
    max-width: 100vw;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
  }

  .container {
    max-width: 100% !important;
    padding-left: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
  }

  .nav-cont2 {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-left: 20px !important;
  }

  .address-item,
  .icon-address,
  .nav-address,
  .nav-cont3 {
    display: none !important;
  }

  .contact-item {
    width: 100%;
    padding-left: 20px;
  }

  .navbar {
    height: auto;
  }
}

/* Desktop */
@media (min-width: 1181px) {
  .navbar ul {
    margin-left: 100px;
  }
}

/* Responsive carousel */
@media (max-width: 992px) {
  #carousel-wrapper {
    height: auto !important;
  }

  .custom-caption {
    bottom: 10%;
    max-width: 95%;
    padding: 0 10px;
  }

  .custom-caption h1 {
    font-size: 1.5rem;
  }

  .custom-caption p {
    font-size: 1rem;
  }

  .custom-caption button {
    font-size: 0.9rem;
    padding: 8px 16px;
    width: auto;
  }
}

@media (max-width: 576px) {
  .custom-caption {
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 95%;
    padding: 0 8px;
  }

  .custom-caption h1 {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  .custom-caption p {
    font-size: 0.9rem;
  }

  .custom-caption button {
    font-size: 0.8rem;
    padding: 6px 12px;
    width: 100%;
    margin: 5px 0;
    border-radius: 25px;
  }

  .custom-caption div {
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
}
