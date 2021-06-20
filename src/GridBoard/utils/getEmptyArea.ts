import { ItemsConfig } from "../interfaces";

export function getEmptyArea(total: number, itemsConfig: ItemsConfig): number {
  const itemKeys = Object.keys(itemsConfig);
  const usedArea = itemKeys.reduce((tot, key) => {
    const config = itemsConfig[key];
    let area = 1;
    if (config.style) {
      if (!config.style.gridColumnEnd || !config.style.gridRowEnd){
        area = config.style.gridColumnEnd || config.style.gridRowEnd || 1;
      } else {
        const {
          gridColumnStart = 1,
          gridColumnEnd,
          gridRowStart = 1,
          gridRowEnd
        } = config.style;
        area = (gridColumnEnd - gridColumnStart) * (gridRowEnd - gridRowStart);
      }
    }
    return tot + area;
  }, 0);
  return total - usedArea;
}