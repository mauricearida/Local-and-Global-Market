import React, { useEffect } from "react";
import "./home.css";

import Image from "../assets/header_pic.jpg";
import Centerimage from "../assets/pic4.jpg";
import Pic_roofing from "../assets/pic5.jpg";
import Pic_heating from "../assets/heating.jpeg";
import Kitchen_renovation from "../assets/kitchen.png";
import Roof_icon from "../assets/people-roof-solid.svg";
import Gaf1 from "../assets/GAF.png";
import Gaf2 from "../assets/GAF2.png";

const Home = () => {
  useEffect(() => {
    document.getElementById("hamburger-menu").addEventListener("click", () => {
      document.querySelector(".container").classList.toggle("change");
    });

    window.onload = () => {
      setTimeout(() => {
        document.querySelector("body").classList.add("display");
      }, 10);
    };

    document.querySelector(".scroll-btn").addEventListener("click", () => {
      document.querySelector("html").style.scrollBehavior = "smooth";
      setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
      }, 1000);
    });
  }, []);
  return (
    <div>
      <div className="spinner-container">
        <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="container">
        <div className="hamburger-menu" id="hamburger-menu">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <span>Close</span>
        </div>

        <header className="header">
          <div className="img-wrapper">
            <img src={Image} />
          </div>
          <div className="banner">
            <h1>Local & Global Market</h1>
            <p>Residential, Commercial, Industrial and Municipal</p>
            <button>Let's talk</button>
          </div>
        </header>

        <section className="sidebar">
          <ul className="menu">
            <li className="menu-item">
              <a href="#" className="menu-link" data-content="Home">
                Home
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" data-content="About Us">
                About Us
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" data-content="Team">
                Team
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" data-content="Pricing">
                Pricing
              </a>
            </li>
            <li className="menu-item">
              <a href="#" className="menu-link" data-content="Contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="social-media">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </section>

        <section className="about-us">
          <div className="section-header">
            <h1 className="section-heading">About Us</h1>
            <div className="underline"></div>
          </div>
          <div className="services">
            <div className="service">
              <div className="service-header">
                <img
                  src={Roof_icon}
                  style={{
                    color: "#4b4b4b",
                    width: "4.7rem",
                    height: "4.7rem",
                    marginRight: "2rem",
                  }}
                />
                <h3>Residential Roofing</h3>
              </div>
              <p className="service-text">
                Warm Home, is the reliable and experienced Residential Roofing
                Company you can trust to build a quality roof for your home.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className="service"
            >
              <a href="https://www.gaf.com/en-us" target="_blank">
                <img src={Gaf1} />
              </a>
              {/* <div className="service-header">
                <i className="fas fa-pencil-alt"></i>
                <h3>Design</h3>
              </div>
              <p className="service-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, officia! Necessitatibus delectus sed dicta corrupti
                voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
              </p>*/}
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fas fa-paint-roller"></i>
                <h3>Repairs & Maintenance</h3>
              </div>
              <p className="service-text">
                Warm Home, provides Roofing Repairs for Residential and
                Commercial Roofs. We know you want a reliable Roofing Contractor
                to be knowledgeable, honest and efficient with getting repairs
                on your roof done quickly and correctly!
              </p>
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fas fa-paint-brush"></i>
                <h3>Commercial Roofing</h3>
              </div>
              <p className="service-text">
                Warm Home, provides experienced and professional commercial
                roofing for any type or size business. GTRS is one of the
                leading roofing companies.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                cursor: "pointer",
              }}
              className="service"
            >
              <a href="https://www.gaf.com/en-us" target="_blank">
                <img src={Gaf2} />
              </a>
              {/*   <div className="service-header">
                <i className="far fa-building"></i>
                <h3>Execution</h3>
              </div>
              <p className="service-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, officia! Necessitatibus delectus sed dicta corrupti
                voluptatibus, omnis eius vel ab magni nemo, incidunt esse! Quod!
              </p>*/}
            </div>
            <div className="service">
              <div className="service-header">
                <i className="fas fa-toilet"></i>
                <h3>Kitchen & Bathroom</h3>
              </div>
              <p className="service-text">
                Ready for your dream kitchen? Want to remodel that old bathroom?
                Need to replace damaged carpet with flooring that you love? We
                can complete all of your interior and exterior remodeling
                projects to meet your design preferences.
              </p>
            </div>
            <div className="about-us-img-wrapper">
              <img src={Centerimage} style={{ borderRadius: "90px" }} />
            </div>
          </div>
        </section>

        <section className="team">
          <div className="section-header">
            <h1 className="section-heading">Let us Help You</h1>
            <div className="underline"></div>
          </div>

          <div className="cards-wrapper">
            <div className="card" data-tilt>
              <h1>Roofing</h1>
              <div className="card-img-wrapper">
                <img src={Pic_roofing} alt="CEO" />
              </div>
              {/*  <div className="card-info">
                <h2>Roofing Services</h2>
                  <h3>CEO</h3>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, impedit!"
                </p>
                <button>Read More</button>
              </div>*/}
            </div>
            <div className="card" data-tilt>
              <h1>Heating</h1>
              <div className="card-img-wrapper">
                <img src={Pic_heating} alt="Designer" />
              </div>
              {/*  <div className="card-info">
                <h2>Heating/Air Conditioning Services</h2>
                <h3>Designer</h3>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, impedit!"
                </p>
                <button>Read More</button>
              </div> */}
            </div>
            <div className="card" data-tilt>
              <h1>Renovation</h1>
              <div className="card-img-wrapper">
                <img src={Kitchen_renovation} alt="Architect" />
              </div>
              {/* <div className="card-info">
                <h2>Renovation Services</h2>
                {/* <h3>Architect</h3>
                <p>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, impedit!"
                </p>  
                  <button>Read More</button>  
              </div> */}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="contact-wrapper">
            <div className="contact-left"></div>
            <div className="contact-right">
              <h1 className="contact-heading">Contact</h1>
              <form>
                <div className="input-group">
                  <input type="text" className="field" />
                  <label className="input-label">Full Name</label>
                </div>
                <div className="input-group">
                  <input type="email" className="field" />
                  <label className="input-label">Email</label>
                </div>
                <div className="input-group">
                  <textarea className="field"></textarea>
                  <label className="message">Message</label>
                </div>
                <input type="submit" className="submit-btn" value="Submit" />
              </form>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "3rem",
                }}
              >
                <a href="https://www.gaf.com/en-us" target="_blank">
                  <img src={Gaf1} />
                </a>
                <a href="https://www.gaf.com/en-us" target="_blank">
                  <img src={Gaf2} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p className="copyright">
              Copyright &copy; 2020, Maurice Arida - All Rights Reserved
            </p>
            <div className="social-list">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </footer>
        <a href="#" className="scroll-btn">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
