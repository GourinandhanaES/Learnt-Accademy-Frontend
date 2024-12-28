import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logoImg.png";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4">
    <div className="container">
      <div className="row">
        {/* Logo Section */}
        <div className="col-md-4 text-center">
          <img
            src={logoImg} 
            alt="Learnt Accademy Logo"
            style={{ maxWidth: "150px", marginBottom: "15px" }}
          />
          <p>
            <strong>Learnt Accademy</strong>
            <br />
            Excellence in Learning
          </p>
        </div>

        {/* Contact Section */}
        <div className="col-md-4">
          <h5>Contact</h5>
          <p>
            <strong>Learnt Accademy</strong>
            <br />
            #110, Krishna Garden Main Road
            <br />
            Rajarajeshwari Nagar
            <br />
            Bangalore 560098
            <br />
            Phone: 8047361000
            <br />
            Email:{" "}
            <a href="mailto:operations@learnt.edu" className="text-dark">
              operations@learnet.edu
            </a>
          </p>
        </div>

        {/* Social Media Section */}
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <div className="d-flex justify-content-start">
            <a href="#" className="mx-2 text-dark" style={{ fontSize: "24px" }}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="mx-2 text-dark" style={{ fontSize: "24px" }}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="mx-2 text-dark" style={{ fontSize: "24px" }}>
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="mx-2 text-dark" style={{ fontSize: "24px" }}>
              <i className="bi bi-youtube"></i> 
            </a>
          </div>
        </div>
      </div>

      <hr className="bg-light my-3" />

      {/* Footer Bottom Section */}
      <div className="text-center">
        <p className="mb-0">
          &copy; 2024 Learnet Academy. All Rights Reserved. | Designed by <strong>GourinandhanaES</strong>
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;