import React from "react";

// import error from './error.png'

const Error = () => {
  return (
    <div style={{width: '100vw', display:'flex' , flexDirection: 'column' , justifyContent: 'center' , alignItems: 'center'}}>
      <img src='temp.png' alt="error" />
      <button style={{fontSize:'20px' ,padding:'10px' , borderRadius:'10px' , border:'1px solid blue' , backgroundColor:'purple' , color:'white'}}>Go Back</button>
    </div>
  );
};


export default Error;