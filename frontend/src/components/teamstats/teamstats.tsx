import React from "react";
import { TeamStatsPie } from "./teamstatspie/teamstatspie";
import { TeamStatsBar } from "./teamstatsbar/teamstatsbar";
import { TeamStatsTable } from "./teamstatstable/teamstatstable";

export const TeamStats = () => {
  return (
    <div style={{backgroundColor: "#FFDDDD"}}>
      <div className={"row no-gutters pt-5"}></div>
      <div className={"row no-gutters pt-5"}></div>
      <div className={"row no-gutters pt-4"}></div>
      <div className={"row now-gutters pt-5"} style={{minHeight: "50vh"}}>
        <div className={"col"}>
          <TeamStatsPie />
        </div>
        <div className={"col"}>
          <TeamStatsBar />
        </div>
        <div className={"col"}>
          <TeamStatsTable />
        </div>
      </div>
    </div>
  );
};
