import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollectProductDetails from "./pages/CollectProductDetails";
import SellForm from "./components/SellForm";
import ProductDetails from "./pages/ProductDetails";
import SellerBargain from "./pages/Offers";
import Offers from "./pages/Offers";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Home from'./pages/Home';
import Landing from "./pages/Landing";
import LoginForm from "./pages/Login";
import RegistrationForm from "./pages/SignUp";
import Myoffers from "./pages/Myoffers";
// import Home from "./pages/Home"
import AfterSearch from "./pages/AfterSearch"
import Team from "./scenes/team";
// import Myoffers from "./pages/Myoffers"
import AboutUs from "./pages/AboutUs";
import HelpPage from "./pages/HelpForm";
import MyAds from "./pages/MyAds";
import SavedAddresses from './pages/SavedAddresses'
import Error from './pages/Error'
import 'bootstrap/dist/css/bootstrap.min.css';
import ChangePasswordPage from "./pages/changePassword";

// import User from './pages/User'
import SellHome from "./pages/SellHome";
import Sidebar from "./pages/Sidebar";


function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Landing/>
    },
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
       
        {
          path:"/Home",
          element:<Home/>,
          errorElement:<Error/>
        },
        {
          path:'/aboutUs',
          element:<AboutUs/>,
          errorElement:<Error/>
        },
        {
          path:'/contact',
          element:<HelpPage/>,
          errorElement:<Error/>
        },
        {
          path: "/sellProducts",
          element: <CollectProductDetails />,
          errorElement:<Error/>
        },
        {
          path: "/productDetails",
          element: <ProductDetails />,
          errorElement:<Error/>
        },
        {
          path:'AfterSearch',
          element:<AfterSearch/>,
          errorElement:<Error/>
        },
        {
          path: "/Offers",
          element: <Offers />,
          errorElement:<Error/>
        },
        {
          path:'/MyAds',
          element:<MyAds/>,
          errorElement:<Error/>
        },
        {
          path: "/UserProfile",
          element: <UserProfile />,
          errorElement:<Error/>
        },
        {
          path: "/changePassword",
          element: <ChangePasswordPage />,
          errorElement:<Error/>
        },
        {
          path:'/savedAdress',
          element:<SavedAddresses/>,
          errorElement:<Error/>
        },
        {
          path:"/checkout",
          element:<Checkout />,
          errorElement:<Error/>
        },
        {
          path:'/MyOffers',
          element:<Myoffers/>,
          errorElement:<Error/>
        },
        // {
        //   path:'/sellerDashboard',
        //   element:<Sidebar />
        // },
        {
          path:'/sellerDashboard',
          element:<SellHome/>
        }
        
      ],  
      
    },
    {
      path:'/login',
      element:<LoginForm/>
    },
    {
      path:'/signUp',
      element:<RegistrationForm/>
    },
    {
      path:"/admin/*",
      element:<Admin />,
      // children:[
        
      // ]
    },
    {
      path:'/team',
      element:<Team/>
    }
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
