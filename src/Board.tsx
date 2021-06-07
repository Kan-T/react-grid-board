import React from "react";

export interface BoardProps {
	display?: 'grid' | 'inline-grid';
  gridTemplateColumns: string;
  gridTemplateRows: string;
  columnGap: string;
  rowGap: string;
  justifyItems: 'start'|'end'|'center'|'stretch';
  alignItems: 'start'|'end'|'center'|'stretch';
  justifyContent: 'start'|'end'|'center'|'stretch'|'space-around'|'space-between'|'space-evenly';
}

const defaultBoardStyle = {
  display:'grid',
  gridTemplateColumns: '160px',
  gridTemplateRows: '160px',
  columnGap: '6px',
  rowGap: '6px',
  justifyItems: 'center',
  alignItems: 'center',
}

export function Board (props: BoardProps) {
  const {
    boardStyle,

  } = props;

  const boardContainerStyle: React. = 

}