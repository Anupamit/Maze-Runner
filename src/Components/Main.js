import React from "react";
import MazeContainer from "./MazeContainer";

const Main = () => {
    const style = {
        color: "#f26d5b",
        textAlign: "center",
        marginTop: "5px"
      };
  return (
    <div>
      <h1 style={style}>Move React icon with the Arrow Keys</h1>
      <MazeContainer/>
    </div>
  )
}

export default Main
