import {
  MyComponent,
  Categories,
  Corousel,
  Recommendations,
} from "../components/HomePage_components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth);
  // console.log(user);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${`http://localhost:8000`}/getAllProducts`,
      {
        headers:{
          'Authorization':localStorage.getItem('token')
        }
      }
      );
      const data = await response.json();
      // console.log(data.products);
      setProductList(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <MyComponent />
      <Categories />
      <Corousel />
      <Recommendations productList={productList} />
    </div>
  );
};
export default Home;
