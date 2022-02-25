import { ItemsConfig } from "../GridBoard/interfaces";

export function getEmptyArea(total: number, itemsConfig: ItemsConfig): number {
  const itemKeys = Object.keys(itemsConfig);
  const usedArea = itemKeys.reduce((tot, key) => {
    const config = itemsConfig[key];
    let area = 1;
    if (config.itemPositionStyle) {
      if (!config.itemPositionStyle.gridColumnEnd || !config.itemPositionStyle.gridRowEnd){
        area = config.itemPositionStyle.gridColumnEnd || config.itemPositionStyle.gridRowEnd || 1;
      } else {
        const {
          gridColumnStart = 1,
          gridColumnEnd,
          gridRowStart = 1,
          gridRowEnd
        } = config.itemPositionStyle;
        area = (gridColumnEnd - gridColumnStart) * (gridRowEnd - gridRowStart);
      }
    }
    return tot + area;
  }, 0);
  return total - usedArea;
}