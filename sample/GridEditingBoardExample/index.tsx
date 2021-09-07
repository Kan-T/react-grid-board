import React from "react";
import { GridEditingBoard } from "../../src";
import Item1 from "../GridBoardExample/item1";
import Item2 from "../GridBoardExample/item2";
import Item3 from "../GridBoardExample/item3";

const { useState } = React;

const components = {
  // blank: React.lazy(() => import('./item'))
  blank1: Item1,
  blank2: Item2,
  blank3: Item3
};

export default function Story(): React.ReactElement {
  const config = JSON.parse(sessionStorage.getItem("GridEditingBoardExample_config")) || {};
  const setConfig = config => {
    sessionStorage.setItem("GridEditingBoardExample_config", JSON.stringify(config));
  };

  const [isEditing, setIsEditing] = useState(false);

  const onEditingChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const checked = e.target.checked;
    setIsEditing(checked);
  };

  return (
    <>
      <div style={{ paddingBottom: "10px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div>
          <input type="checkbox"
            id="isEditing"
            checked={isEditing}
            onChange={onEditingChange}
          />
          <label htmlFor="isEditing" style={{margin: 0, paddingLeft: "10px"}}>
            isEditing
          </label>
        </div>
      </div>
      <GridEditingBoard
        initialConfig={config}
        components={components}
        setConfig={setConfig}
        isEditing={isEditing}
      />
    </>
  );
}