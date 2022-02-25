interface BoardConfig {
  rows?: number;
  cols?: number;
  itemWidth?: number; //unit is pixel
  itemHeigh?: number; //unit is pixel
  gap?: number; //unit is pixel
}

interface ItemPositionStyle extends React.CSSProperties {
  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;
}

interface ItemConfig {
    compName: string;
    itemPositionStyle?: ItemPositionStyle;
}

interface ItemsConfig {
  [key: string]: ItemConfig;
}

interface GridConfig {
  boardConfig?: BoardConfig,
  itemsConfig?: ItemsConfig,
  maxItemId?: string;
}

type SetGridConfig = ((updateConfig: GridConfig) => void);
type SetBoardConfig = ((updateBoardConfig: BoardConfig) => void);
type SetItemConfig = ((itemId: string, itemConfig: ItemConfig) => void);
type RemoveItemConfig = ((itemId: string) => void);

export {
  BoardConfig,
  ItemConfig,
  ItemsConfig,
  ItemPositionStyle,
  GridConfig,
  SetGridConfig,
  SetBoardConfig,
  SetItemConfig,
  RemoveItemConfig
};