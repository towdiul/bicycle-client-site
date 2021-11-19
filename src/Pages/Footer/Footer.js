import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
                <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1><span>Bicycle Store</span></h1>
               
                <p className="mt-4 ">
                    <small>
                    “If people cannot write well, they cannot think well, and if they cannot think well, others will do their thinking for them.”
                  </small>
                </p>

                <p className="mt-5">
                  <small>Bicycle Store © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                    <li className="footer-menu ">Home</li>
                    <li className="footer-menu">Services</li>
                    <li className="footer-menu">Contact us</li>
                    <li className="footer-menu"> About us</li>
                    
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                 
                  <div>
                    <h5>+004496546514</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  
                  <div>
                    <p>
                      Dhaka, Bangladesh, NY 10038,
                      <br /> 100 1st Avenue,Gree Road, NY 100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    
    );
};

export default Footer;