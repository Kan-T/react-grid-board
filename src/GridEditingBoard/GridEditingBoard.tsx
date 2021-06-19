import React, { useState } from "react";
import { GridBoard, GridConfig } from "..";
import { GridEditingAside } from "./GridEditingAside";
import { useGridConfig } from "../GridBoard/utils";
import "../style";
const prefix = "grid-board";

export interface GridEditingBoardProps {
  initialConfig?: GridConfig;
  components: {
    [key: string]: () => React.ReactElement;
  };
}

export function GridEditingBoard(props: GridEditingBoardProps): React.ReactElement {
  const {
    initialConfig = {},
    components
  } = props;

  const [config, , setBoardConfig, setItemConfig, removeItemConfig] = useGridConfig(initialConfig);
  const [editItemId, setEditItemId] = useState<string|undefined>(undefined);

  return (
    <div className={`${prefix}-grid-editing-board`}>
      <GridBoard
        gridConfig={config}
        style={{backgroundColor: "rgba(255,255,255,0.1)"}}
        components={components}
        isEditing
        setEditItemId={setEditItemId}
      />
      <GridEditingAside
        gridConfig={config}
        editItemId={editItemId}
        setEditItemId={setEditItemId}
        setBoardConfig={setBoardConfig}
        setItemConfig={setItemConfig}
        removeItemConfig={removeItemConfig}
        components={components}
      />
    </div>
  );
}