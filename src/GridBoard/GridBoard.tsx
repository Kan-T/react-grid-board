import React from "react";
import { GridConfig } from "./interfaces";
import { Board } from "./Board";
import { Item } from "./Item";
import { getEmptyArea } from "../utils";
import "../style";
const prefix = "grid-board";

export interface GridBoardProps {
  style: React.CSSProperties;
  gridConfig?: GridConfig;
  components: {
    [key: string]: () => React.ReactElement;
  };
  className?: string;
  isEditing?: boolean;
  editItemId?: string;
  setEditItemId?: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function GridBoard (props: GridBoardProps): React.ReactElement {
  const {
    style,
    gridConfig = {},
    components,
    isEditing,
    editItemId,
    setEditItemId,
    className
  } = props;

  const {
    boardConfig = {},
    itemsConfig = {},
    maxItemId
  } = gridConfig;

  const {
    rows = 5,
    cols = 5,
    itemWidth = 160,
    itemHeigh = 160,
    gap = 5
  } = boardConfig;

  const itemKeys = Object.keys(itemsConfig);
  const emptyArea = getEmptyArea(rows * cols, itemsConfig);
  const empties: number[] = [];
  for (let i = 0; i < emptyArea; i++){
    empties.push(i);
  }

  return (
    <div className={`${prefix}-grid-board`}>
      <Board
        style={style}
        className={className}
        rows = {rows}
        cols = {cols}
        itemWidth = {itemWidth}
        itemHeigh = {itemHeigh}
        gap = {gap}
      >
        {itemKeys.map(key => {
          const {itemPositionStyle, compName} = itemsConfig[key];
          return (
            <Item
              key={key}
              id={key}
              style={itemPositionStyle}
              isEditing={isEditing}
              isActiveEditing={isEditing && key === editItemId}
              isMax={key === maxItemId}
              setEditItemId={setEditItemId}
            >
              {components[compName]?.() || <div></div>}
            </Item>
          );
        })}
        {isEditing && empties.map(i => (
          <Item key={`empty${i}`} isEditing={isEditing}/>
        ))}
      </Board>
    </div>
  );
}