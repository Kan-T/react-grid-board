import React from "react";

export interface BoardProps {
  boardStyle?: React.CSSProperties;
  children: React.ReactNode;
}

const defaultBoardStyle: React.CSSProperties = {
  width: "820px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, 160px)",
  gridTemplateRows: "repeat(auto-fill, 160px)",
  columnGap: "5px",
  rowGap: "5px",
  justifyItems: "center",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "start"
};

export function Board (props: BoardProps) {
  const {
    boardStyle = {},
    children
  } = props;

  const boardContainerStyle = {
    ...defaultBoardStyle,
    ...boardStyle
  };

  return (
    <div style={boardContainerStyle}>
      {children}
    </div>
  );
}