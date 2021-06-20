import React from "react";
import { ItemConfig, SetItemConfig, RemoveItemConfig } from "../GridBoard/interfaces";
const { useState, useMemo, useEffect } = React;
const prefix = "grid-board";

export interface ItemFormProps {
  itemId: string;
  itemConfig: ItemConfig;
  setItemConfig: SetItemConfig;
  removeItemConfig: RemoveItemConfig;
  components: {
    [key: string]: () => React.ReactElement;
  };
}

export function ItemForm (props: ItemFormProps): React.ReactElement {
  const {
    itemId,
    itemConfig,
    setItemConfig,
    components
  } = props;

  const {
    compName,
    style = {}
  } = itemConfig;

  const initWidth = style.gridColumnEnd && style.gridColumnStart ? (style.gridColumnEnd - style.gridColumnStart) : 1;
  const initHeight = style.gridRowEnd && style.gridRowStart ? (style.gridRowEnd - style.gridRowStart) : 1;

  const [componentName, setComponentName] = useState<string>(compName);
  const [rowStart, setRowStart] = useState<number>(style.gridRowStart || 1);
  const [colStart, setColStart] = useState<number>(style.gridColumnStart || 1);
  const [width, setWidth] = useState<number>(initWidth);
  const [height, setHeight] = useState<number>(initHeight);

  const compOptions = useMemo(() => {
    return Object.keys(components);
  }, [components]);

  useEffect(() => {
    const name = compName || "";
    setComponentName(name);
    setRowStart((style.gridRowStart || 1));
    setColStart(style.gridColumnStart || 1);
    setWidth(initWidth);
    setHeight(initHeight);
  // Only want to reset when changing the item for editing
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  const compChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    const name = e.currentTarget.value;
    setComponentName(name);
  };

  const itemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.id;
    const value = Number(e.target.value);
    if (key === "gridColumnStart") {
      setColStart(value);
    } else if (key === "gridRowStart") {
      setRowStart(value);
    } else if (key === "width") {
      setWidth(value);
    } else if (key === "height") {
      setHeight(value);
    }
  };

  const saveHandler = () => {
    // For new item, generate a new id
    const colEnd: number = Number(colStart) + Number(width);
    const rowEnd: number = Number(rowStart) + Number(height);
    setItemConfig(itemId, {
      compName: componentName,
      style: {
        ...style,
        gridColumnStart: colStart,
        gridColumnEnd: colEnd,
        gridRowStart: rowStart,
        gridRowEnd: rowEnd
      }
    });
  };

  return (
    <div id="item" className={`${prefix}-form`}>
      <section>
        {/* <Select
          preValueText="Widget: "
          options={compOptions}
          onChange={compChange}
          value={{
            label: componentName,
            value: componentName
          }}
        /> */}
        <select
          id="component-select"
          placeholder="Please select a widget..."
          onChange={compChange}
        >
          {
            compOptions.map(name => (
              <option key={`component-select-option-${name}`} value={name} selected={name === componentName}>name</option>
            ))
          }
        </select>
      </section>
      <section>
        <label htmlFor="gridRowStart">From row:</label>
        <input id="gridRowStart" type="number" value={rowStart} onChange={itemChange} />
      </section>
      <section>
        <label htmlFor="gridColumnStart">From column:</label>
        <input id="gridColumnStart" type="number" value={colStart} onChange={itemChange} />
      </section>
      <section>
        <label htmlFor="width">width:</label>
        <input id="width" type="number" value={width} onChange={itemChange} />
      </section>
      <section>
        <label htmlFor="height">height:</label>
        <input id="height" type="number" value={height} onChange={itemChange} />
      </section>
      <section className="backward">
        <button
          onClick={saveHandler}
        >
          Save
        </button>
      </section>
    </div>
  );
}
