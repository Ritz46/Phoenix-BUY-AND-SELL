import React from "react";
import "./CSS/HomeStyles.css";
import "./CSS/navbar.css";
// import './AfterSearch.css'

const Aftersearch = (props) => {
  return (
    <div className="p-16 ml-10 min-h-screen max-h-fit flex justify-center flex-col mb-8">
      {props.productList.map((product, i) => (
        <div key={i} className="pdtelem flex-col">
          <div className="sort-product">
            <img
              src={product.imgs[0]}
              style={{ objectFit: "contain" }}
              alt={product.title}
            />

            <div className="pdtdetails">
              <div style={{ fontSize: "25px", color: "black" }}>
                {product.title}
              </div>
              <div
                style={{
                  fontWeight: 700,
                  color: "rgb(104, 103, 103)",
                  fontSize: "18px",
                  paddingTop: "5px",
                }}
              >
                ₹ {product.expectedPrice}
              </div>

              <div
                style={{
                  color: "rgb(104, 103, 103)",
                  fontSize: "15px",
                  paddingTop: "5px",
                }}
              >
                {product.address}
              </div>

              <div
                style={{ color: "gray", fontSize: "15px", paddingTop: "5px" }}
              >
                {product.oldness} old
              </div>
              <div style={{ color: "gray", fontSize: "13px" }}>
                posted 5 days ago
              </div>
            </div>

            <div className="detailsbtn" style={{ width: "20vw" }}>
              <a href={`/productDetails?param=${product._id}`}>
                <button
                  type="submit"
                  className="btn btn-success"
                  style={{
                    position: "absolute",
                    right: "400px",
                    backgroundColor: "rgb(111, 20, 197)",
                  }}
                >
                  More Details
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
      <p className="flex flex-col m-auto text-xl text-violet-200 font-bold">
        End of results...
      </p>
    </div>
  );
};

export default Aftersearch;
