import React from "react";
import classes from "./UploadedProducts.module.css";
import { Link } from "react-router-dom";

const OfferList = [
  {
    productName: "abcef",
    amount: 50,
    status: "Accecpted",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Accecpted",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
  {
    productName: "abcef",
    amount: 50,
    status: "Rejected",
  },
];

const UploadedProducts = ({ product }) => {
  return (
    <div className={classes.wrapper}>
      <div style={{ minHeight: "30rem" }} className={classes.product_list}>
        <ul>
          {product.length ? (
            product.slice(0, 5).map((offer) => {
              return (
                <li className={classes.list}>
                  <Link to={`/productDetails?param=${offer._id}`}>
                    <span>
                      <img
                        src={offer.imgs[0]}
                        className="w-1/12 inline pr-4"
                        alt="product"
                      />
                    </span>
                    <div className="inline w-full text-center">
                      {offer.title}
                    </div>
                  </Link>
                </li>
              );
            })
          ) : (
            <div className="empty-List m-10 p-5 h-max align-bottom justify-center items-center flex flex-col">
              <img
                src="error-404-4344461-3613889.png"
                className="opacity-[25%]"
                style={{ backgroundRepeat: "no-repeat" }}
                alt=""
                srcset=""
              />
              <p className="text-center">No Advertisements Yet ...</p>
            </div>
          )}
        </ul>
        <div className="flex justify-center">
          <div className={classes.offerbtn}>
            <button type="button">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadedProducts;
