import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList'
import { useSelector } from 'react-redux';
const MyAds = () => {
    const [products,setProducts]=useState([]);
    const authSlice=useSelector((state)=>state.auth)
    useEffect(()=>{
        const fetchProduct=async()=>{
            const response=await fetch(`${`http://localhost:8000`}/getAllProducts`,{
            headers:{
              'Authorization':localStorage.getItem('token')
            }}
            );
            const data=await response.json();
            console.log(data);
            setProducts(data.products.filter((product)=>product.owner==authSlice.user.uname))
        }
        fetchProduct();
    },[])
  return (
    <ProductList products={products}/>
  )
}

export default MyAds