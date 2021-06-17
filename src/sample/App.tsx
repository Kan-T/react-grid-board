import React from "react";
// import {Board} from "../../dist/index.js";
import {Board} from "..";

export default function App(): React.ReactElement {
  return (
    <div style={{width: "100%", height: "100vh", backgroundColor:"#ccc"}}>
      <Board>
        <div style={{width: "100%", height: "100%", backgroundColor:"#eee"}}></div>
        <div style={{width: "100%", height: "100%", backgroundColor:"#eee"}}></div>
        <div style={{width: "100%", height: "100%", backgroundColor:"#eee"}}></div>
      </Board>
    </div>
  );
}