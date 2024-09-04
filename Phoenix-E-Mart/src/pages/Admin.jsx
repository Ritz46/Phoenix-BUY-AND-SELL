// import React from 'react';
// import { useState } from 'react';
// import AdminSidebar from '../components/AdminSidebar.jsx'
// import classes from './Admin.module.css';
// import Graph from '../components/Graph.jsx'
// import {UserData} from '../Data.js'  

// const Admin = (props) =>{

//     const [userData,setUserData] = useState({
//         labels: UserData.map((data)=>data.month),
//         datasets: [{
//             label: 'Offers Accepted',
//             data: UserData.map(data=>data.offersAccepted),
//             backgroundColor: ["violet"],
//         }]
//     });
//     const [graph,setGraph] = useState(1);

//     function changetoRejected(){
//         setGraph((prevstate)=>!prevstate);
//         setUserData({
//             labels: UserData.map((data)=>data.month),
//             datasets: [{
//             label: 'Offers Rejected',
//             data: UserData.map(data=>data.offersRejected),
//             backgroundColor: ["orange"],
//         }]
//         })
//     }

//     function changetoAccepted(){
//         setGraph((prevstate)=>!prevstate);
//         setUserData({
//             labels: UserData.map((data)=>data.month),
//             datasets: [{
//             label: 'Offers Accepted',
//             data: UserData.map(data=>data.offersAccepted),
//             backgroundColor: ["violet"],
//         }]
//     })
//     }

//     return(
//        <React.Fragment>
//         <div className={classes.main}>
//         <div className={classes.sideBar}>
//             <AdminSidebar />
//         </div>
//         <div className={classes.barChart}>
//             <Graph chartData={userData}/>
//             {graph && <button onClick={changetoRejected} className={classes.button}>Show Rejected Offers</button>}
//             {!graph && <button onClick={changetoAccepted} className={classes.button}>Show Accepted Offers</button>}
//         </div>
//         </div>
//        </React.Fragment>
//     )
// }

// export default Admin;


import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../scenes/global/Topbar";
// import AdminNavbar from "../scenes/global/adminNavbar";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Invoices from "../scenes/invoices";
import Contacts from "../scenes/contacts";
import Bar from "../scenes/bar";
import Form from "../scenes/form";
import Line from "../scenes/line";
import Pie from "../scenes/pie";
import FAQ from "../scenes/faq";
import Geography from "../scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "../scenes/calendar/calendar";
import Graph from '../components/Graph';
import Products from '../scenes/products/'
function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app flex flex-wrap">
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Graph />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/products" element={<Products/>} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin;