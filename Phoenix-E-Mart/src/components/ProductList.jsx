import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";
const ProductList = ({ products }) => {
  return (
    <div className="listwraper">
      {/* <h2>Product List</h2> */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.length ? (
          products.map((product) => (
            <li
              key={product._id}
              style={{ marginBottom: "20px", paddingBottom: "10px" }}
              className="list-element"
            >
              <Link to={`/productDetails?param=${product._id}`}>
                <img
                  src={product.imgs[0]}
                  alt={product.title}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginRight: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                  className="inline"
                />
                <div className="inline">
                  <h3 className="inline-block">{product.title}</h3>
                  <br />
                  <hr />
                  <br />
                  <p style={{ color: "white" }} className="">
                    Price: ₹{product.expectedPrice}
                  </p>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <div className="empty-List m-10 p-5 h-max align-bottom justify-center items-center flex flex-col">
            <img
              src="error-404-4344461-3613889.png"
              className="opacity-[25%]"
              style={{ backgroundRepeat: "no-repeat" }}
              alt=""
              srcSet=""
            />
            <p className="text-center">No Advertisements Yet ...</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
