import React, { useEffect, useRef, useState } from "react";
import classes from "./ProductDetails.module.css";
import ProductImageCarousel from "../components/ProductImageCarousel";
import { purple } from "@mui/material/colors";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [params] = useSearchParams();
  // console.log(params.get("param"));
  const product = {
    title: "Product 1",
    description: "This is test product",
    oldness: "5 years",
    expectedPrice: 5000,
    address: "wsfdxgfchgvjhbjnkjuyfjgc",
    owner: "Parth",
    imgs: [
      "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/11/PS5-Review-8-scaled.jpg",
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt054c12973dc65d3e/60db71928491e60f790b1b87/f61138da5e0a3af7c7c83b6166f1cb03dbfee30f.jpg",
      "https://media.cnn.com/api/v1/images/stellar/prod/spider-man-2-ps5-hands-on-lead-cnnu.jpg?c=16x9&q=h_720,w_1280,c_fill",
    ],
  };
  const [product1, setProduct1] = useState(product);

  useEffect(() => {
    //to get details of the product
    let url =
      `${`http://localhost:8000`}/getSingleProduct?productId=` +
      params.get("param");
    // console.log(url);
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.product);
      setProduct1(data.product);
      // setProductList(data.products)
      // return data;
      console.log(product1.imgs);
    };
    fetchProducts();
  }, []);

  const priceRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (!auth.isAuth) {
      navigate("/login");
    }
    // console.log(priceRef.current.value);
    let Offer = {
      offerer: auth.user.uname,
      productName: product1.title,
      productid: params.get("param"),
      owner: product1.owner,
      amount: priceRef.current.value,
    };
    const response = await fetch(`${`http://localhost:8000`}/postOffer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Offer),
    });

    const result = await response.json();
    navigate("/MyOffers");
    console.log(result);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-9">
      <div className="flex-wrap justify-center p-6 mb-6">
        <div className={classes.centerer}>
          <div className={classes.carousel}>
            <ProductImageCarousel images={product1.imgs} />
          </div>
        </div>

        <div className={classes.offerForm}>
          <br />

          <p>
            <span className={classes.textgradient}>Expected Price</span>
          </p>
          <h3 className="font-semibold text-lg"> ₹ {product1.expectedPrice}</h3>
          <br />
          <hr />
          <br />
          <form onSubmit={submitHandler}>
            <label>
              <span className={classes.textgradient}>
                Entered Price to Offer
              </span>
              <br />
            </label>

            {/* <div className="input-group mb-3" style={{ width: "15rem" }}>
              
              <span className="input-group-text">₹</span>
              <input type="text" className="form-control" />
            </div> */}
            <div className={classes.input_controls}>
              {/* <span>₹</span> */}
              <input type="text" ref={priceRef} />
            </div>
            {/* <button type="button" className="btn btn-outline-primary">
              Offer
            </button> */}

            <div className={classes.offerbtn}>
              <div className="flex flex-row justify-center items-center pt-2">
                <input type="submit" value={"Offer"} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="">
        <div className={classes.title}>
          <div className="bg-fuchsia-400 w-full text-center p-3 rounded-[15px]">
            <h3>{product1.title}</h3>
          </div>
        </div>
        <div className={classes.description}>
          <p>
            {" "}
            <span className={classes.textgradient}>Owner  </span>{" "}
            {product1.owner}
          </p>
          <br />
          <hr />
          <br />
          <p>
            <span className={classes.textgradient}>Duration of Usage  </span>{" "}
            {product1.oldness}
          </p>
          <br />
          <hr />
          <br />
          <p className={classes.textgradient}>Description</p>
          <br />
          {product1.description}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
