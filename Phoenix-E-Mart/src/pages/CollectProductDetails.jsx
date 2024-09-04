import React from "react";
import SellForm from "../components/SellForm";
// import FormCard from "../components/FormCard";
// import classes from './CollectProductDetails.module.css'
// import Sidebar from "./Sidebar";
// import SellHome from "./SellHome";
// import  {BrowserRouter , Routes , Route} from 'react-router-dom';
function CollectProductDetails() {
  return (
    <div className='d-flex'>
        <div className='w-auto'>
        {/* <Sidebar/>  */}
        </div>
        <div className='col'>  
        {/* <SellHome/> */}
        <SellForm/>
        </div>
    </div>
  );
};

export default CollectProductDetails;
