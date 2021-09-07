import React from "react";
import { GridEditingAside } from "./GridEditingAside";
import { useGridConfig } from "../GridBoard/utils";
import { GridConfig, SetGridConfig } from "../GridBoard/interfaces";
import "../style";
import { GridBoard } from "../GridBoard/GridBoard";

const { useState, useEffect } = React;
const prefix = "grid-board";

export interface GridEditingBoardProps {
  initialConfig?: GridConfig;
  components: {
    [key: string]: () => React.ReactElement;
  };
  setConfig?: SetGridConfig;
  isEditing?: boolean;
}

export function GridEditingBoard(props: GridEditingBoardProps): React.ReactElement {
  const {
    initialConfig = {},
    components,
    setConfig,
    isEditing = false
  } = props;

  const [config, , setBoardConfig, setItemConfig, removeItemConfig] = useGridConfig(initialConfig);
  const [editItemId, setEditItemId] = useState<string|undefined>(undefined);

  useEffect(() => {
    if (!isEditing) {
      setEditItemId(undefined);
    }
  }, [isEditing, setEditItemId]);

  return (
    <div className={`${prefix}-grid-editing-board`}>
      {
        isEditing &&
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
      }
      <GridBoard
        gridConfig={config}
        style={{backgroundColor: "rgba(255,255,255,0.1)"}}
        components={components}
        isEditing={isEditing}
        editItemId={editItemId}
        setEditItemId={setEditItemId}
      />
    </div>
  );
}