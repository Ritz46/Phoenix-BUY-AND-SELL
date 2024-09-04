import React, { useEffect, useState } from "react";
import Offer from "../components/Offer";
import classes from "./Offer.module.css";
import { useSelector } from "react-redux";

const Offers = () => {
  const [offers, setOffers] = useState([]);
  const authSlice = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchOffers = async () => {
      let response = await fetch(`${`http://localhost:8000`}/getAllOffers`);
      let data = await response.json();
      console.log(data);
      setOffers(
        data.Offers.filter((offer) => offer.owner === authSlice.user.uname)
      );
    };
    fetchOffers();
  }, []);

  return (
    <>
      <div className="p-10 h-screen mb-24">
        {offers.length ? (
          offers.map((Ofr) => {
            return (
              <div className={classes.ofrwpr} key={Ofr._id}>
                <Offer
                  productName={Ofr.productName}
                  productId={Ofr.productid}
                  offerId={Ofr._id}
                  buyer={Ofr.offerer}
                  amount={Ofr.amount}
                  status={Ofr.offerStatus}
                />
              </div>
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
            <p className="text-center">No Advertisements Yet...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Offers;
