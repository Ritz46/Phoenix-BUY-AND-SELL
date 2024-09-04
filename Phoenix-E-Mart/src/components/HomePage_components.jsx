import React from "react";
import "./CSS/HomeStyles.css";
import "./CSS/navbar.css";
import { Link } from "react-router-dom";

const MyComponent = () => {
  return (
    <div>
      <link rel="icon" type="image/x-icon" href="/images/logo.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="container1">
      <div className="catcon">
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=electronics"
        >
          <div className="categories">
            <img className="catimg" src="electronicscat.png" alt="elecimg" />
            <h6>Electronics</h6>
          </div>
        </Link>
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=automobile"
        >
          <div className="categories">
            <img className="catimg" src="automobiles.png" alt="autoimg" />
            <h6>Automobiles</h6>
          </div>
        </Link>
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=mobiles"
        >
          <div className="categories">
            <img className="catimg" src="smartphone.png" alt="elecimg" />
            <h6>Mobiles</h6>
          </div>
        </Link>
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=furniture"
        >
          <div className="categories">
            <img className="catimg" src="furniture.png" alt="elecimg" />
            <h6>Furniture</h6>
          </div>
        </Link>
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=fashion"
        >
          <div className="categories">
            <img className="catimg" src="fashioncat.png" alt="elecimg" />
            <h6>Fashion</h6>
          </div>
        </Link>
        <Link
          className="category_1"
          to="/Aftersearch?method=tags&searchString=hardware"
        >
          <div className="categories">
            <img className="catimg" src="hardware.png" alt="elecimg" />
            <h6>Hardware</h6>
          </div>
        </Link>
      </div>
    </div>
  );
};

const Corousel = () => {
  const heightstyle = {
    height: "35rem",
  };
  return (
    <div className="carousel">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="imgtitle">Automobiles</div>
            <img
              src="cars-parked-upscaled (3).jpg"
              className="d-block w-100"
              alt="empty cell"
              style={heightstyle}
            />
          </div>
          <div className="carousel-item">
            <div className="imgtitle">Hardware</div>
            <img
              src="hardware3.jpg"
              className="d-block w-100"
              alt="empty cell"
              style={heightstyle}
            />
          </div>
          <div className="carousel-item">
            <div className="imgtitle">Mobile Phones</div>
            <img
              src="mobile-phones-for-sale.jpg"
              className="d-block w-100"
              alt="empty cell"
              style={heightstyle}
            />
          </div>
          <div className="carousel-item">
            <div className="imgtitle">Furniture</div>
            <img
              src="furniture1.jpeg"
              className="d-block w-100"
              alt="..."
              style={heightstyle}
            />
          </div>
          <div className="carousel-item">
            <div className="imgtitle">Fashion</div>
            <img
              src="fashion5.jpg"
              className="d-block w-100"
              alt="..."
              style={heightstyle}
            />
          </div>
          <div className="carousel-item">
            <div className="imgtitle">Hardware Tools</div>
            <img
              src="hardware3.jpg"
              className="d-block w-100"
              alt="..."
              style={heightstyle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Recommendations = (props) => {
  const productList = props.productList;

  // const imagesArray = [
  //   "sample-image-1.jpg",
  //   "sample-image-2.jpg",
  //   "sample-image-1.jpg",
  //   "sample-image-2.jpg",
  //   "sample-image-1.jpg",
  //   "sample-image-2.jpg",
  //   "sample-image-1.jpg",
  //   "sample-image-2.jpg",
  // ];
  return (
    <div className="mt-6">
      <div className="recom">
        <h3>Fresh Recommendations For You</h3>
      </div>
      <div className="cardscon">
        <div className="category1">
          <div className="container">
            {productList && productList.slice(0, 16).map((product, index) => (
              <Link key={index} to={`/productDetails?param=${product._id}`}>
                <div
                  className="card transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:bg-purple-400 duration-300"
                  style={{
                    width: "18rem",
                    height: "20rem",
                    margin: "15px",
                    float: "left",
                    position: "static",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={product.imgs[0]}
                    style={{ objectFit: "contain", width: "20rem" }}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <div className="pdttitle" style={{ overflow: "hidden" }}>
                      <h5 className="card-title">{product.title}</h5>
                    </div>
                    <div className="pdtprice">
                      <h5 className="text-slate-900">
                        ₹{product.expectedPrice}
                      </h5>
                    </div>
                    <hr style={{ marginTop: 0 }} />
                    {/* <div className="pdtdesc">{product.address}</div> */}
                    <div
                      style={{
                        color: "rgb(101, 101, 101)",
                        fontSize: "13px",
                        paddingLeft: "2px",
                      }}
                    >
                      posted 5 days ago
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MyComponent, Categories, Corousel, Recommendations };