import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import { LineChart } from "@mui/x-charts/LineChart";

function SellHome() {
  return (
    <>
      <div className="flex flex-row h-screen bg-gray-800 justify-start">
        <div className="flex flex-col w-auto">
          <Sidebar />
        </div>
        <div className="flex-col w-9/12 ">
          <div className="p-3 bg-light h-screen ml-16">
            <div className="container-fluid d-flex mt-2">
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                <div className="d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm">
                  <i className="bi bi-currency-rupee fs-1 text-success"></i>
                  <div>
                    <span>Sales</span>
                    <h2 style={{ fontWeight: "25px", fontSize: "30px" }}>
                      234
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                <div className="d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm">
                  <i className="bi bi-truck fs-1 text-primary"></i>
                  <div>
                    <span>Delivery</span>
                    <h2 style={{ fontWeight: "25px", fontSize: "30px" }}>
                      240
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                <div className="d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm">
                  <i className="bi bi-graph-up-arrow fs-1  text-danger"></i>
                  <div>
                    <span>Sells Increase</span>
                    <h2 style={{ fontWeight: "25px", fontSize: "30px" }}>
                      20%
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light">
                <div className="d-flex justify-content-around p-4 align-items-center bg-white text-dark border border-secondary shadow-sm">
                  <i className="bi bi-currency-rupee fs-1 text-warning"></i>
                  <div>
                    <span>Total Earnings</span>
                    <h2 style={{ fontWeight: "25px", fontSize: "30px" }}>
                      40000
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-48 mr-32 mt-8 bg-violet-200">
              <h2 className="text-black underline">Yearwise Sales Chart</h2>
              <LineChart
                xAxis={[{ data: [0, 1, 2, 3, 4, 5] }]}
                series={[
                  {
                    data: [20, 45, 30, 37, 55, 96],
                  },
                ]}
                width={550}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellHome;
