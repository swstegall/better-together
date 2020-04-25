import React from "react";
import { TeamStats } from "./components/teamstats/teamstats";
import { MyStats } from "./components/mystats/mystats";
import { Sidebar } from "./components/sidebar/sidebar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        maxHeight: "100vh",
        overflow: "hidden"
      }}
    >
      <div style={{ width: "25vw" }}>
        <Sidebar />
      </div>
      <div style={{ width: "75vw" }}>
        <div>
          <MyStats />
        </div>
        <div>
          <TeamStats />
        </div>
      </div>
    </div>
  );
};

export default App;
