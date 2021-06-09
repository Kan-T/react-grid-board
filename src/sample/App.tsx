import React from "react";
import {Board} from "../../index.js";
// import {Board} from "..";

export default function App() {
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