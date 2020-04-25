import React from "react";
import { TeamStatsPie } from "./teamstatspie/teamstatspie";
import { TeamStatsBar } from "./teamstatsbar/teamstatsbar";

export const TeamStats = () => {
  return (
    <div>
      <TeamStatsPie />
      <TeamStatsBar />
    </div>
  );
}