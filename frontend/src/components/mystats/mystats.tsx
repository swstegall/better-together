import React from "react";
import { MyStatsLineChart } from "./mystatslinechart/mystatslinechart";
import { MyStatsTable } from "./mystatstable/mystatstable";
import { MyStatsHeader } from "./mystatsheader/mystatsheader";

export const MyStats = () => {
  return (
    <div style={{paddingTop: "1%", height: "50vh" }}>
      <div>
        <MyStatsHeader />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{paddingTop: "7%", height: "500px", width: "500px" }}>
          <MyStatsLineChart />
        </div>
        <div style={{paddingTop: "7%", height: "500px", width: "500px" }}>
          <MyStatsLineChart />
        </div>
        <div style={{paddingTop: "7%", height: "500px", width: "500px" }}>
          <MyStatsTable />
        </div>
      </div>
    </div>
  );
};
