// require myoffers.css

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./myoffers.css";
import { Link } from "react-router-dom";
// import {product_card}from "../../constants/data.js";

const Myoffers = () => {
  const [offers, setOffers] = useState([]);
  const authSlice = useSelector((state) => state.auth);
  let uname = authSlice.user.uname;
  useEffect(() => {
    const fetchOffers = async () => {
      let response = await fetch(`${`http://localhost:8000`}/getAllOffers`);
      let data = await response.json();
      console.log(data);

      setOffers(data.Offers.filter((offer) => offer.offerer === uname));
    };
    fetchOffers();
  }, []);
  console.log(offers);
  return (
    <div className="container p-5">
      <h2
        style={{
          fontFamily: "Arial, sans-serif",
          marginTop: "2%",
          marginLeft: "2%",
          fontSize:'1.5rem',
          color:'blueviolet'
        }}
      >
        Offers
      </h2>
      <div className="container-item justify-center">
        {offers.length ? (
          offers.map((item) => (
            <Link key={item._id} to={`/productDetails?param=${item.productid}`}>
              <div className="offer-list ">
                {/* <img src={item.imgs[0]} alt={item.productName} width="10%" /> */}
                <div
                  className="product-text"
                  style={{
                    position: "relative",
                    left: "5%",
                    display: "inline-block",
                  }}
                >
                  <p style={{ fontSize: "27px" }}>{item.productName}</p>
                  <hr />
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "grey",
                    }}
                  >
                    ₹ {item.amount}
                  </p>
                  {item.offerStatus == -1
                    ? "Rejected"
                    : item.offerStatus == 0
                    ? "Pending"
                    : "Accepted"}
                {item.offerStatus==1 && <button className="m-10">Buy</button>}

                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="empty-List m-16 p-5 h-max align-bottom justify-center items-center flex flex-col ml-52">
            <img src="error-404-4344461-3613889.png" className="opacity-[25%]" style={{backgroundRepeat: 'no-repeat'}} alt="" srcset="" />
            <p className="text-center">No Offers Yet ...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myoffers;
