import React from "react";
import { GridConfig, BoardConfig, ItemConfig, SetGridConfig, SetBoardConfig, SetItemConfig, RemoveItemConfig } from "../GridBoard/interfaces";
// import { get, set } from "lodash";
import get from "lodash/get";
import set from "lodash/set";
const { useState } = React;

export function useGridConfig(initialConfig: GridConfig): [
  GridConfig,
  SetGridConfig,
  SetBoardConfig,
  SetItemConfig,
  RemoveItemConfig
] {
  const defaultConfig = {...initialConfig};
  !get(defaultConfig, "boardConfig.rows") && set(defaultConfig, "boardConfig.rows", 5);
  !get(defaultConfig, "boardConfig.cols") && set(defaultConfig, "boardConfig.cols", 5);
  !get(defaultConfig, "boardConfig.itemWidth") && set(defaultConfig, "boardConfig.itemWidth", 160);
  !get(defaultConfig, "boardConfig.itemHeigh") && set(defaultConfig, "boardConfig.itemHeigh", 160);
  !get(defaultConfig, "boardConfig.gap") && set(defaultConfig, "boardConfig.gap", 5);

  const [config, setConfig] = useState(defaultConfig);

  const setGridConfig = (updateConfig: GridConfig) => {
    setConfig({
      ...config,
      ...updateConfig
    });
  };

  const setBoardConfig = (updateBoardConfig: BoardConfig) => {
    const {
      boardConfig = {}
    } = config;
    setGridConfig({boardConfig: {
      ...boardConfig,
      ...updateBoardConfig
    }});
  };

  const setItemConfig = (itemId: string, updateItemConfig: Partial<ItemConfig>) => {
    const {
      itemsConfig = {}
    } = config;
    setGridConfig({itemsConfig: {
      ...itemsConfig,
      [itemId]: {
        ...itemsConfig[itemId],
        ...updateItemConfig
      }
    }});
  };

  const removeItemConfig = (itemId: string) => {
    const {
      itemsConfig = {}
    } = config;
    itemsConfig[itemId] = {compName: ""};
    delete itemsConfig[itemId];
    setGridConfig({itemsConfig: {
      ...itemsConfig
    }});
  };


  return [config, setGridConfig, setBoardConfig, setItemConfig, removeItemConfig];
}