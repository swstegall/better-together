import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className={"container-fluid"} style={{ minHeight: "100vh", overflow: "hidden" }}>
      <div className={"row"}>
        <div className={"col-3"} style={{ minHeight: "100vh", backgroundColor: "#ff0000" }}>
          Sidebar
        </div>
        <div className={"col-9"}>
          <div className={"row"} style={{ minHeight: "50vh", backgroundColor: "#gg0000" }}>
            <div className={"col"}>
            My Stats
            </div>
          </div>
          <div className={"row"} style={{ minHeight: "50vh", backgroundColor: "#bb0000" }}>
            <div className={"col"}>
           Team Stats
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
