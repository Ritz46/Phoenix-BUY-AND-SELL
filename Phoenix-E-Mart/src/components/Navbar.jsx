import React, { useRef, useState } from "react";
import "./Navbar.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import auth, { authActions } from "../store/auth";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };
  let searchString = useRef();
  let navigate = useNavigate();

  const searchhandler = (event) => {
    event.preventDefault();
    navigate(
      "/AfterSearch?method=title&searchString=" + searchString.current.value
    );
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    dispatch(authActions.logout);
    navigate("/");
  };

  return (
    <nav style={{ height: "10px" }}>
      <div className="navbar-contents">
        <Link to="/home" className="title">
          <div className="logo">
            <img
              src="logo2.png"
              alt="phnx logo"
              style={{ height: "3rem" }}
            ></img>
          </div>
          <div className="titletext">PHOENIX</div>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
        <form onSubmit={searchhandler}>
          {/* <div className="searchicon">
            <img src="search.png" alt="search icon"></img>
          </div>
          <div className="searchtext">
            <input type="text" placeholder="  Search" ref={searchString}></input>
          </div> */}

          {/* <div> */}
          <div className="input-group" style={{ marginLeft: "10px" }}>
            <input
              type="text"
              className="form-control"
              style={{ width: "500px" }}
              ref={searchString}
              placeholder="Search for products"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>
        </form>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/aboutUs" className="menu-links ml-6 px-1">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="menu-links">
              Contact Us
            </NavLink>
          </li>
        </ul>

        <button className="navbar-toggle" onClick={toggleOverlay}>
          <img
            src="user.png"
            alt=""
            srcSet=""
            className="max-h-16 rounded-s-full rounded-e-full	bg-black"
          />
        </button>

        {overlayVisible && (
          <div className="overlay z-10" onClick={toggleOverlay}>
            {/* Content of the overlay */}
            <div
              style={{ backgroundColor: "bisque" }}
              className="overlay-content"
            >
              <Link to={"/userProfile"} className="text-decoration-none">
                <div className="color-black font-semibold text-lg m-4 text-black	">
                  User Profile
                </div>
              </Link>
              <hr className="bg-black" />
              <Link to={"/sellerDashboard"} className="text-decoration-none">
                <div className="color-black font-semibold text-lg m-4 text-black	">
                  Seller Dashboard
                </div>
              </Link>
              <hr className="bg-black" />
              <Link to={"/MyOffers"} className="text-decoration-none">
                <div className="color-black font-semibold text-lg m-4 text-black	">
                  My Offers
                </div>
              </Link>
              <hr className="bg-black" />
              {/* <Link to={"/MyAds"} className="text-decoration-none">
                <div className="color-black font-semibold text-lg m-4 text-black	">
                  My Advertisements
                </div>
        </Link>*/}
              {/* <hr className="bg-black" /> */}
              <Link to={"/sellProducts"} className="text-decoration-none">
                <div className="color-black font-semibold text-lg m-4 text-black	">
                  Sell
                </div>
              </Link>
              <hr className="bg-black" />
              <button className="rounded mt-8" onClick={logoutHandler}>
                LogOut
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

//   const [profileOpen, setProfileOpen] = useState(true);

//   return (
//     <nav>
//       <Link to="/" className="title">
//         <div className="logo">
//           <img src="logo.png" alt="phnx logo" style={{ height: "3rem" }}></img>
//         </div>
//         <div className="titletext">PHOENIX</div>
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
//       <div className="searchbar">
//         <div className="searchicon">
//           <img src="search.png" alt="search icon"></img>
//         </div>
//         <div className="searchtext">
//           <input type="text" placeholder="  Search"></input>
//         </div>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/services">Services</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>

//       {/* User Profile Offcanvas */}
//       <div className={`profile-offcanvas ${profileOpen ? "open" : ""}`}>
//         {/* Add your user profile content here */}
//         <div className="profile-content">
//           {/* Your user profile information and actions */}
//         </div>
//         <button onClick={() => setProfileOpen(!profileOpen)}>Close Profile</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import "./Navbar.css"; // You can create a separate CSS file for styling

// const Navbar = () => {
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   const toggleOverlay = () => {
//     setOverlayVisible(!overlayVisible);
//   };

//   return (
//     <div>
//      <Link to="/" className="title">
// <div className="logo">
// <img src="logo.png" alt="phnx logo" style={{ height: "3rem" }}></img>
// </div>
// <div className="titletext">PHOENIX</div>
// </Link>
// <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
// <div className="searchbar">
// <div className="searchicon">
// <img src="search.png" alt="search icon"></img>
// </div>
// <div className="searchtext">
// <input type="text" placeholder="  Search"></input>
// </div>
// </div>
// <ul className={menuOpen ? "open" : ""}>
// <li>
// <NavLink to="/about">About</NavLink>
// </li>
// <li>
// <NavLink to="/services">Services</NavLink>
// </li>
// <li>
// <NavLink to="/contact">Contact</NavLink>
// </li>
// </ul>

// //       {/* Overlay */}
//      {overlayVisible && (
//         <div className="overlay" onClick={toggleOverlay}>
//           {/* Content of the overlay */}
//           <div className="overlay-content">
//             <p>Overlay Content Goes Here</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
