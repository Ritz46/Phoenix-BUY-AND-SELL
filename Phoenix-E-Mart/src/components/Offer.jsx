import React, { useState } from "react";
import classes from "./Offer.module.css";

const Offer = (props) => {
  let statusMsg=''
  const [toggle,setToggle]=useState(true);
  if(props.status==0){
    statusMsg='Pending'
  }
  else if(props.status==1){
    statusMsg='Accepted';
  }
  else statusMsg='Rejected'
  // console.log(props.productId);

  const onCLickHandler=async()=>{
    let url=import.meta.env.VITE_API_URL+'/updateOffers?pid='+props.productId+'&oid='+props.offerId
    let response=await fetch(url)
    let data=await response.json();
    setToggle(!toggle)
    // console.log(data);
  }
  return (
    <div>
      <p>Name of the product:- {props.productName}</p>
      <p>Name of the buyer:- {props.buyer}</p>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div className={classes.amount}>Amount:- {props.amount}</div>
          <br />
          <div className={classes.status}>Status:- {statusMsg}</div>
        </div>
        {props.status == 0 && (
          <div className={classes.ofrbtn}>
            <button type="button" className="btn btn-outline-success" onClick={onCLickHandler}>
              Accept
            </button>
          </div>
        )}
      </div>
      <br />
      <div style={{backgroundColor:`${statusMsg=='Rejected'?'red':statusMsg=='Accepted'?'green':'yellow'}`, height:'1rem', borderRadius:'15px'}}></div>
    </div>
  );
};

export default Offer;
