import React, { useState, useEffect } from "react";
import useGetStockData from "../../Hooks/useGetStockData";
import Chart from "../Chart/Chart";
import "./Dashboard.css";

const Dashboard = () : JSX.Element => {
  //fetch stock data
  const data  = useGetStockData();
  //rerender component to simulate stock polling
  const [,setRerender] = useState(Date.now());

  //one second set for polling interval
  const POLL_INTERVAL = 1;
  //seconds times milliseconds
  const POLL_INTERVAL_SECONDS : number = POLL_INTERVAL * 1000;
  //useEffect used to rerender current component based on POLL_INTERVAL
  useEffect(() => {
    const interval : number = setInterval(
        () => setRerender(Date.now()),
      POLL_INTERVAL_SECONDS
    );
    return () => {
      //clean up interval
      clearInterval(interval);
    };
  }, [POLL_INTERVAL_SECONDS]);

  return (
    <div className="dashboardContainer">
      {Object.entries(data).map(([stock, stockValue]) => (
        <div key={stock} className="chartContainer"><Chart stock={stock}  stockValue={stockValue}/></div>
      ))}
    </div>
  );
};

export default Dashboard;
