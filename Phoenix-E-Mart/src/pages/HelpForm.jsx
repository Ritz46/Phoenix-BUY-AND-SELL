// require help.css

import React, { useRef, useState } from "react";
import "./help.css";
import { useSelector } from "react-redux";
import "bootstrap-icons/font/bootstrap-icons.css";

const HelpPage = () => {
  const [queryValue, setQueryValue] = useState("");
  const query = useRef();
  const authSlice = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let qry = {
      querrier: authSlice.user.uname,
      query: query.current.value,
    };
    console.log(qry);
    // Perform your AJAX request or any other form submission logic here
    let response = await fetch(`${`http://localhost:8000`}/postQwuery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(qry),
    });
    let result = await response.json();
    console.log(result);
    setQueryValue("");
    alert("Form submitted");
  };

  return (
    <div style={{}}>
      <div className="container p-5" style={{ backgroundColor: "#242424" }}>
        <div className="help-header" style={{ width: "100%" }}>
          <h2
            style={{ paddingTop: "40px", paddingLeft:'130px' }}
            className="text-purple-500 text-2xl"
          >
            HI, WE ARE HERE TO HELP YOU !
          </h2>
        </div>

        <div
          className="category-container"
          style={{ width: "100%", textAlign: "center " }}
        >
          {/* Category Blocks */}
          <div className="category-block">
            <a href="/FAQ">
            <i className="bi bi-person me-3 fs-4" style={{color:'white'}}></i>
            </a>
            <div className="text-purple-500 text-2xl" style={{ paddingTop: "20px" }}>
              Seller FAQS
            </div>
          </div>
          <div className="category-block">
            <a href="/FAQ">
            <i className="bi bi-person me-3 fs-4"  style={{color:'white'}}></i>
            </a>
            <div className="text-purple-500 text-2xl" style={{ paddingTop: "20px" }}>
              Buyer FAQS
            </div>
          </div>

          {/* General Queries */}
          <div className="category-block">
            <a href="/FAQ">
            <i className="bi bi-person me-3 fs-4"  style={{color:'white'}}></i>
            </a>
            <div className="text-purple-500 text-2xl" style={{ paddingTop: "20px" }}>
              Genaral Queries
            </div>
          </div>

          {/* Legal Information */}
          <div className="category-block">
            <a href="/FAQ">
            <i className="bi bi-person me-3 fs-4"  style={{color:'white'}}></i>
            </a>
            <div className="text-purple-500 text-2xl" style={{ paddingTop: "20px" }}>
              Legal Information
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "40px" }} />
        <div
          className="query-box"
          style={{ backgroundColor: "#242424", textAlign: "center" }}
        >
          <br />
          <div className="help-header" style={{ width: "70%" }}>
            <h2 style={{ fontSize: "23px" }}>
              Couldn't find what you are looking for?
            </h2>
          </div>
          <form
            id="help-form"
            action="/help"
            method="post"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="query"
              style={{ fontSize: "1.5rem", marginLeft: "10px" }}
              className="font-bold"
            >
              Contact us
            </label>
            <br />
            <div className="text-back">
              <textarea
                name="query"
                id="query"
                cols="30"
                rows="10"
                className="query"
                placeholder="Enter your concern here.."
                style={{
                  backgroundColor: "rgb(255, 253, 253)",
                  borderRadius: "1rem",
                  padding: "1rem",
                  width: "50rem",
                  color: "black",
                }}
                ref={query}
                value={queryValue}
                onChange={(e) => setQueryValue(e.target.value)}
              ></textarea>
              {/* <img src="\images\fsd-product\help.jpg" className="help-img" width="" alt="imdfhft" /> */}
            </div>
            <br />
            <button
              type="submit"
              className="sbtbtnq bg-purple-500"
              style={{
                marginLeft: "10px",
                marginBottom: "40px",
                marginTop: "10px",
              }}
            >
              Submit
            </button>
          </form>
          {/* <form id="help-form" action="/upload" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="file" name="file"  />
              <button type="submit" className="sbtbtnq bg-purple-500" style={{ marginLeft: '10px', marginBottom: '40px', marginTop: '10px' }}>
                Submit
              </button>
          </form> */}
        </div>
        <br />
      </div>

      <script>{/* Your jQuery script */}</script>
    </div>
  );
};

const Navbar = () => {
  // Assume Navbar component implementation here
  return <div>Navbar Component</div>;
};

export default HelpPage;
