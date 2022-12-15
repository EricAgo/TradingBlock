import React, { useEffect, useState } from "react";
import "./Chart.css"

const Chart = ({ stockValue, stock }) => {
  const [dataSet, setDataSet] = useState(1);

  useEffect(() => {
    //get last price and store it
    stockValue && setDataSet([dataSet[1], stockValue]);
  }, [stockValue]);

  return (
    <>
      <table className="boxStyle">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Last Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{stock}</td>
            <td>{dataSet[1] ? dataSet[1] : "Loading..."}</td>
            <td>{dataSet[0] > 10 ? dataSet[0] : "Loading..."}</td>
            {dataSet[0] ? <td className={dataSet[1] - dataSet[0] < 0 ? "redChange" : "greenChange"}>{(dataSet[1] - dataSet[0]).toFixed(2)}</td> : <td>Loading...</td>}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Chart;
