import React from "react";
// import BannerBackground from "../assets/home-banner-background.png";
import { FiArrowRight } from "react-icons/fi";
import "./Landing.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Landing = () => {
  const isAuth = useSelector((state) => state);
  console.log(isAuth);
  return (
    <div className="home-container" style={{ width: "100vw" }}>
      <div className="home-banner-container pt-0">
        {/* <div className="home-bannerImage-container">
          <img src='logo2.png' alt="" />
        </div> */}
        <div className="home-text-section bg-black ml-0">
          <img
            src="logo2.png"
            style={{ width: "70%", opacity: "0.5" }}
            className="z-0 ml-48"
            alt=""
          />
          <div className="z-30 absolute top-20 ml-16">
            <h1 className="primary-heading text-[purple]">
              We are here to mediate your buyings and sellings
            </h1>
            {/* <p className="primary-text">
              lorem ipsum dolor sit amet, consectetur adip , lorem
            </p> */}
            <div className="flex flex-row" >
              <div className="inline m-7">
                <Link to="/login" className="inline">
                  <button className="secondary-button">
                    Login <FiArrowRight />{" "}
                  </button>
                </Link>
              </div>
              {/* <br />
            <br /> */}
              <div className="inline m-7">
                <Link to="/SignUp" className="inline">
                  <button className="secondary-button">
                    Sign Up <FiArrowRight />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
