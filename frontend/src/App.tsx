import React from "react";
import { TeamStats } from "./components/teamstats/teamstats";
import { MyStats } from "./components/mystats/mystats";
import { Sidebar } from "./components/sidebar/sidebar";

const App = () => {
  return (
    <div
      className={"container-fluid"}
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <div className={"row"}>
        <div
          className={"col-3"}
          style={{ minHeight: "100vh", backgroundColor: "#DDDDFF" }}
        >
          <Sidebar />
        </div>
        <div className={"col-9"}>
          <div
            className={"row"}
            style={{ minHeight: "50vh", backgroundColor: "#DDFFDD" }}
          >
            <div className={"col"}>
              <MyStats />
            </div>
          </div>
          <div
            className={"row"}
            style={{ minHeight: "50vh", backgroundColor: "#FFDDDD" }}
          >
            <div className={"col"}>
              <TeamStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
