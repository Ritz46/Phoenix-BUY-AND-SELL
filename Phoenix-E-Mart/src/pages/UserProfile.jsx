import React, { useEffect, useState } from "react";
import ProfileMenu from "../components/ProfileMenu";
import classes from "./UserProfile.module.css";
import UserImage from "../components/UserImage";
import UploadedProducts from "../components/UploadedProducts";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [products,setProducts]=useState([]);
  let authSlice=useSelector((state)=>state.auth)

  useEffect(()=>{
    const fetchProduct=async()=>{
        const response=await fetch(`${`http://localhost:8000`}/getAllProducts`);
        const data=await response.json();
        console.log(data);
        setProducts(data.products.filter((product)=>product.owner==authSlice.user.uname))
    }
    fetchProduct();
},[])

  return (
    <div className="grid grid-cols-3">
      <div className={classes.usermenu}>
        <div className="rounded-2xl shadow-2xl p-4 text-center">
          <UserImage user={authSlice.user}/>

          <div className="my-4">
            <ProfileMenu user={authSlice.user}/>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className={classes.secondaryBlock}>
          <div style={{minHeight:'30rem'}}>
            <div className={classes.title}>
              <p>{`Hi, Welcome back ${authSlice.user.uname}`}</p>
              Your Advertisements
              </div>
            <UploadedProducts product={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
