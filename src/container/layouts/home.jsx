import React from "react";
import { Link } from "react-router-dom";
import hakka from "../images/speciality/hakka.jpg";
import manchurian from "../images/speciality/manchurian.jpg";
import services_6 from "../images/speciality/service_6.jpg";
import services_5 from "../images/speciality/service_5.jpg";
import services_4 from "../images/speciality/service_4.jpg";
import services_3 from "../images/speciality/service_3.jpg";
var ReactRotatingText = require("react-rotating-text");

export default function Home() {
  return (
    <div className="common-home">
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="banner-section-content text-center">
                <h2
                  className="wow bounceIn  animated slide-text"
                >
                  {" "}
                  Ordering Food base on{" "}
                  <ReactRotatingText
                    items={["Cuisine", "Festival", "Offers"]}
                    pause={1500}
                    className="text-warning"
                    emptyPause={1000}
                    typingInterval={100}
                    deletingInterval={100}
                  />
                </h2>
                <div className="overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area text-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h3>Our Speciality</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={manchurian}
                      alt="test-01"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title">Fried Spicy shrimp</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                   Veg Manchurian Dry
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={services_6}
                      alt="test-02"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title"> Thai Chilli Fish</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                  Thai Chilli Fish
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={services_5}
                      alt="test-03"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title">  Fried Spicy shrimp</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                   Fried Spicy shrimp
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={services_4}
                      alt="test-04"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title">Beef Chilli</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                   Beef Chilli
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={services_3}
                      alt="test-05"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title"> Chicken Pakoda</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                   Chicken Pakoda
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-6">
              <div className="card card-speciality hover-speciality mb-4">
                <div className="card-speciality-image">
                  <Link to="" target="_blank">
                    <img
                      className="img-fluid img-fluid"
                      src={hakka}
                      alt="test-05"
                    />
                  </Link>
                </div>
                <div className="card-footer card-speciality-content text-center">
                  <h4 className="card-title card-title">Hakka Noodles</h4>
                  <Link
                    className="card-link card-link"
                    to="/"
                    target="_blank"
                  >
                   Hakka Noodles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
