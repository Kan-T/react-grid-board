import React from "react";
import { GridBoard, GridConfig } from "..";
import { GridEditingAside } from "./GridEditingAside";
import { useGridConfig } from "../GridBoard/utils";
import { SetGridConfig } from "../GridBoard/interfaces";
import "../style";
const { useState } = React;
const prefix = "grid-board";

export interface GridEditingBoardProps {
  initialConfig?: GridConfig;
  components: {
    [key: string]: () => React.ReactElement;
  };
  setConfig?: SetGridConfig;
}

export function GridEditingBoard(props: GridEditingBoardProps): React.ReactElement {
  const {
    initialConfig = {},
    components,
    setConfig
  } = props;

  const [config, , setBoardConfig, setItemConfig, removeItemConfig] = useGridConfig(initialConfig);
  const [editItemId, setEditItemId] = useState<string|undefined>(undefined);

  return (
    <div className={`${prefix}-grid-editing-board`}>
      <GridEditingAside
        gridConfig={config}
        editItemId={editItemId}
        setConfig={setConfig}
        setBoardConfig={setBoardConfig}
        setEditItemId={setEditItemId}
        setItemConfig={setItemConfig}
        removeItemConfig={removeItemConfig}
        components={components}
      />
      <GridBoard
        gridConfig={config}
        style={{backgroundColor: "rgba(255,255,255,0.1)"}}
        components={components}
        isEditing
        setEditItemId={setEditItemId}
      />
    </div>
  );
}