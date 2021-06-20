import React from "react";
import { GridBoard, ItemsConfig } from "../../src";
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
const {useState} = React;

const itemsConfig: ItemsConfig = {
  "1623299311750": {
    compName: "blank1",
    style: {
      gridColumnStart: 1,
      gridRowStart: 3,
      gridColumnEnd: 3,
      gridRowEnd: 4
    }
  },
  "1623299311751": {
    compName: "blank2",
    style: {
      gridColumnStart: 1,
      gridRowStart: 1,
      gridColumnEnd: 3,
      gridRowEnd: 3
    }
  },
  "1623299311752": {
    compName: "blank3",
    style: {
      gridColumnStart: 3,
      gridRowStart: 1,
      gridColumnEnd: 6,
      gridRowEnd: 4
    }
  }
};

const components = {
  // blank: React.lazy(() => import('./item'))
  blank1: Item1,
  blank2: Item2,
  blank3: Item3
};

export default function Story(): React.ReactElement {
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
      <GridBoard
        gridConfig={{
          boardConfig: {
            //  rows: 7,
            //  cols: 6,
            //  itemWidth: 100,
            //  itemHeigh: 100,
            //  gap: 3
          },
          // maxItemId: "1623299311750",
          itemsConfig: itemsConfig
        }}
        style={{backgroundColor:"rgba(255,255,255,0.1)"}}
        components={components}
        isEditing={isEditing}
      />
    </>
  );
}