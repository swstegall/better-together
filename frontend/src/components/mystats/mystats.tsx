import React from "react";
import { MyStatsLineChart } from "./mystatslinechart/mystatslinechart";
import { MyStatsTable } from "./mystatstable/mystatstable";
import { MyStatsHeader } from "./mystatsheader/mystatsheader";

export const MyStats = () => {
  return (
    <div style={{ backgroundColor: "#DDDDFF" }}>
      <div className={"row no-gutters justify-content-end"}>
        <MyStatsHeader />
      </div>
      <div className={"row no-gutters pt-5"}></div>
      <div className={"row no-gutters pt-5"} style={{ minHeight: "45vh" }}>
        <div className={"col"}>
          <MyStatsLineChart />
        </div>
        <div className={"col"}>
          <MyStatsLineChart />
        </div>
        <div className={"col"}>
          <MyStatsTable />
        </div>
      </div>
    </div>
  );
};
