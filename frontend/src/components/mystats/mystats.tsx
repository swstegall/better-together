import React from "react";
import { MyStatsLineChart } from "./mystatslinechart/mystatslinechart";
import { MyStatsTable } from "./mystatstable/mystatstable";
import { MyStatsHeader } from "./mystatsheader/mystatsheader"

export const MyStats = () => {
    return (
        <div className={"container"} style={{ minHeight: '50vh' }}>
            <div className={"row"}>
                <div className={"col"} style={{ minHeight: '8vh', backgroundColor: "#FFDDDD"}}>
                   <MyStatsHeader />
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-4"}>
                    <div className="row align-items-start">
                    <h1>Health</h1>
                    <MyStatsLineChart />
                    </div>
                </div>
                <div className={"col-4"}>
                    <div  className="row align-items-start">
                    <h2>Conservation</h2>
                    <MyStatsLineChart />
                    </div>
                </div>
                <div className={"col-4"}>
                    <h3>Overall Leaderboard</h3>
                    <MyStatsTable />
                </div>
            </div>
        </div>
    );
}