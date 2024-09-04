import React from "react";
import "./CSS/aboutUs.css";

const AboutUsimports = () => {
  return (
    <head>
      <link rel="icon" type="image/x-icon" href="/images/logo.png" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>About-Us</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
      <link rel="stylesheet" href="/CSS/aboutUs.css" />
    </head>
  );
};
const AboutUs_1 = () => {
  return (
    <div>
      
      <div className="headingB pt-6 text-slate-900">
        <b>
          <p>
            DISCOVER HIDDEN GEMS AT UNBEATABLE PRICES WITH OUR SECOND HAND STORE
          </p>
        </b>
      </div>
      <section className="about-us">
        <img
          src="https://media.istockphoto.com/id/1194096608/vector/live-and-online-auction-set-vector-illustration.jpg?s=612x612&w=0&k=20&c=5isivXTD-9QkzYMZEfniW7SNXtfqpHJdZ6ZsZpi8XTs="
          alt="img"
          className="h-60"
        />
        <div className="content">
          <h2 className="text-black underline ">Our Aim : </h2>
          <p style={{ color: "black" }}>
            To provide an userfriendly and trusted platform for trade of verified
            2<sup>nd</sup> hand products. In future, we aim to provide a
            platform for real-time auction/bidding of exclusive items and
            collectibles. Stay tuned for further updates.
          </p>
        </div>
      </section>
      <section className="about-us2 w-auto h-full">
        <div className="content">
      
          <p>
            <ul style={{ color: "white" }}>
              <li>Parth Irache</li>
              <li>Digvijay Ghule</li>
              <li>Rithick E</li>
              <li>Sandeepkumar D</li>
              <li>Krishnamurthy</li>
            </ul>
          </p>
        </div>
        <img
          src="https://blog.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"
          alt="img"
          className="ml-10"
        />
      </section>
    </div>
  );
};

export { AboutUs_1, AboutUsimports };
