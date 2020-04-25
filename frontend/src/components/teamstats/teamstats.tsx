import React from "react";
import { TeamStatsPie } from "./teamstatspie/teamstatspie";
import { TeamStatsBar } from "./teamstatsbar/teamstatsbar";
import { TeamStatsTable } from "./teamstatstable/teamstatstable";

export const TeamStats = () => {
  return (
    <div>
      <h1 style={{paddingTop: "1%"}}>Team Stats</h1>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: "50vh",
          }}
        >
          <div style={{ paddingTop: "6%", height: "500px", width: "500px" }}>
            <TeamStatsPie />
          </div>
          <div style={{ paddingTop: "6%", height: "500px", width: "500px" }}>
            <TeamStatsBar />
          </div>
          <div style={{ paddingTop: "6%", height: "500px", width: "500px" }}>
            <TeamStatsTable />
          </div>
        </div>
      </div>
    </div>
  );
};
