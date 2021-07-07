export interface BoardConfig {
  rows?: number;
  cols?: number;
  itemWidth?: number; //unit is pixel
  itemHeigh?: number; //unit is pixel
  gap?: number; //unit is pixel
}

export interface ItemConfig {
    compName: string;
    itemPositionStyle?: ItemPositionStyle;
}

export interface ItemsConfig {
  [key: string]: ItemConfig;
}

export interface ItemPositionStyle extends React.CSSProperties {
  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;
}

export interface GridConfig {
  boardConfig?: BoardConfig,
  itemsConfig?: ItemsConfig,
  maxItemId?: string;
}

export type SetGridConfig = ((updateConfig: GridConfig) => void);
export type SetBoardConfig = ((updateBoardConfig: BoardConfig) => void);
export type SetItemConfig = ((itemId: string, itemConfig: ItemConfig) => void);
export type RemoveItemConfig = ((itemId: string) => void);