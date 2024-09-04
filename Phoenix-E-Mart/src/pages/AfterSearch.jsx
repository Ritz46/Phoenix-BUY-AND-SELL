import React, { useEffect, useState } from "react";
import AfterSearch_components from '../components/AfterSearch_components';
import { useSearchParams } from "react-router-dom";

const AfterSearch = () => {
    const [params]=useSearchParams();
    let method=params.get('method');
    let searchstring=params.get('searchString');
    console.log(params.get('searchString'));

    const [foundProducts,SetFoundProducts]=useState([]);
    let url=`http://localhost:8000`+'/getSearchResults?method='+method+'&searchString='+searchstring;
    useEffect(()=>{
        const fetchresults=async()=>{
            let response=await fetch(url);
            let data=await response.json();
            SetFoundProducts(data.foundProducts);
        }
        fetchresults()
    },[])
    return (
        <AfterSearch_components productList={foundProducts}/>
    )
}
export default AfterSearch