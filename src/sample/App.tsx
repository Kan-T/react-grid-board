import React from "react";
// import {Board} from "../../dist/index.js";
import {Board} from "..";
import "./styles";

export default function App(): React.ReactElement {
  return (
    <div style={{width: "100%", height: "100vh", backgroundColor:"#ccc"}}>
      <Board>
        <div className="sample-item"></div>
        <div className="sample-item"></div>
        <div className="sample-item"></div>
      </Board>
    </div>
  );
}