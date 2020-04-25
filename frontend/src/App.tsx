import React from "react";
import { TeamStats } from "./components/teamstats/teamstats";
import { MyStats } from "./components/mystats/mystats";
import { Sidebar } from "./components/sidebar/sidebar";

const App = () => {
  return (
    <div className={"container-fluid px-0"} style={{minHeight: "100vh", maxHeight: "100vh", overflow: "hidden"}}>
      <div className={"row no-gutters"}>
        <div className={"col-3"}>
          <Sidebar />
        </div>
        <div className={"col"}>
          <div>
            <div>
              <MyStats />
            </div>
          </div>
          <div>
            <div>
              <TeamStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
