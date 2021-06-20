import React from "react";

export interface BoardProps {
  rows: number;
  cols: number;
  itemWidth: number; //unit is pixel
  itemHeigh: number; //unit is pixel
  gap: number; //unit is pixel
  style: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const defaultBoardStyle: React.CSSProperties = {
  display: "inline-grid",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "start"
};

export function Board (props: BoardProps): React.ReactElement {
  const {
    rows,
    cols,
    itemWidth,
    itemHeigh,
    gap,
    style,
    className,
    children
  } = props;

  const boardStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${cols}, ${itemWidth}px)`,
    gridTemplateRows: `repeat(${rows}, ${itemHeigh}px)`,
    columnGap: gap + "px",
    rowGap: gap + "px"
  };

  const boardContainerStyle = {
    ...defaultBoardStyle,
    ...style,
    ...boardStyle
  };

  return (
    <div data-name="board" style={boardContainerStyle} className={className}>
      {children}
    </div>
  );
}