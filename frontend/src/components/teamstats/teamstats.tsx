import React from "react";
import { TeamStatsPie } from "./teamstatspie/teamstatspie";
import { TeamStatsBar } from "./teamstatsbar/teamstatsbar";
import { TeamStatsTable } from "./teamstatstable/teamstatstable";

export const TeamStats = () => {
  return (
    <div>
      <div className={"container"} style={{ minHeight: '50vh' }}>
            <div className={"row"}>
                <div className={"col-4"}>
                    <div className="row align-items-start">
                    <h1>Team Stats</h1>
                    <TeamStatsPie />
                    </div>
                </div>
                <div className={"col-4"}>
                    <div  className="row align-items-start">
                    <h2>Team High Scores</h2>
                    <TeamStatsBar />
                    </div>
                </div>
                <div className={"col-4"}>
                    <h3>Overall Team Scores</h3>
                    <TeamStatsTable />
                </div>
            </div>
        </div>
    </div>
  );
}