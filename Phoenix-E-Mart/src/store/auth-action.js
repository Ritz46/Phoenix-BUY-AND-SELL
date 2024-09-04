import { authActions } from "./auth";

export const fetchUserProducts=()=>{
    // let userData=get
    return fetchData=async(dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch('https://section20-240df-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("Failed to fetch cart data !");
            }
            const data=await response.json();

            return data;
        }
    }
}