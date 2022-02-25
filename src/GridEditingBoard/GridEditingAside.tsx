import React from "react";
import classnames from "classnames";
import { GridConfig, SetGridConfig, SetBoardConfig, SetItemConfig, RemoveItemConfig, ItemConfig } from "../GridBoard/interfaces";
import { ItemForm } from "./ItemForm";
const { useState } = React;
const prefix = "grid-board";

export interface GridEditingAsideProps {
  gridConfig: GridConfig;
  saveConfig?: SetGridConfig;
  setBoardConfig: SetBoardConfig;
  setItemConfig: SetItemConfig;
  removeItemConfig: RemoveItemConfig;
  editItemId?: string;
  setEditItemId: (id: string) => void;
  components: {
    [key: string]: () => React.ReactElement;
  };
}

const emptyItemConfig: ItemConfig = {
  compName: ""
};

export function GridEditingAside(props: GridEditingAsideProps): React.ReactElement {
  const {
    gridConfig,
    saveConfig,
    setBoardConfig,
    setItemConfig,
    removeItemConfig,
    editItemId,
    setEditItemId,
    components
  } = props;

  const {
    boardConfig = {},
    itemsConfig = {}
  } = gridConfig;

  const [editType, setEditType] = useState("boardConfig");

  const isNew = () => {
    if (!editItemId) {
      return false;
    }
    const ids = Object.keys(itemsConfig);
    const isOld = ids.includes(editItemId);
    return !isOld;
  };

  const switchEditType = (e: React.MouseEvent<HTMLDivElement>) => {
    const type = e.currentTarget.id;
    setEditType(type);
  };

  const boardChange: React.ReactEventHandler<HTMLInputElement> = (e) => {
    const key = e.currentTarget.id;
    const value = e.currentTarget.value;
    setBoardConfig({[key]: value});
  };

  const addHandler = () => {
    setEditItemId(new Date().getTime().toString());
  };

  const saveConfigHandler = () => {
    saveConfig && saveConfig(gridConfig);
  };

  return (
    <aside className={`${prefix}-editing-aside ${prefix}-slide-right`}>
      <div className={`${prefix}-editing-aside-nav`}>
        <div
          className={classnames(`${prefix}-tab`, {[`${prefix}-tab-active`]: (editType === "boardConfig")})}
          id="boardConfig"
          onClick={switchEditType}
        >
          Board config
        </div>
        <div
          className={classnames(`${prefix}-tab`, {[`${prefix}-tab-active`]: (editType === "itemConfig")})}
          id="itemConfig"
          onClick={switchEditType}
        >
          Item config
        </div>
      </div>
      {
        editType === "boardConfig" &&
        <div className={`${prefix}-form`} id="board">
          <section>
            <label htmlFor="rows">Rows:</label>
            <input id="rows" type="number" value={boardConfig.rows || 5} onChange={boardChange} />
          </section>
          <section>
            <label htmlFor="cols">Cols:</label>
            <input id="cols" type="number" value={boardConfig.cols || 5} onChange={boardChange} />
          </section>
          <section>
            <label htmlFor="itemWidth">Item Width:</label>
            <input id="itemWidth" type="number" value={boardConfig.itemWidth || 160} onChange={boardChange} />
          </section>
          <section>
            <label htmlFor="itemHeigh">Item Heigh:</label>
            <input id="itemHeigh" type="number" value={boardConfig.itemHeigh || 160} onChange={boardChange} />
          </section>
          <section>
            <label htmlFor="gap">Gap:</label>
            <input id="gap" type="number" value={boardConfig.gap || 5} onChange={boardChange} />
          </section>
        </div>
      }
      {
        editType === "itemConfig" &&
        <div className={`${prefix}-form`}>
          {
            isNew() &&
            <section className={`center ${prefix}-mt-10`}>
              <span>Add...</span>
            </section>
          }
          {
            !isNew() && editItemId &&
            <section className={`center ${prefix}-mt-10`}>
              <span>Editing...</span>
            </section>
          }
          {
            editItemId &&
            <ItemForm
              itemId={editItemId}
              itemConfig={itemsConfig[editItemId] || emptyItemConfig}
              setItemConfig={setItemConfig}
              components={components}
              removeItemConfig={removeItemConfig}
            />
          }
          {
            !isNew() &&
            <section className={`center ${prefix}-mt-100`}>
              <button
                className="w-100"
                onClick={addHandler}
              >
                Add new item
              </button>
            </section>
          }
        </div>
      }

      <div className={`${prefix}-container ${prefix}-mt-100`}>
        <section>
          <button
            className="w-100"
            onClick={saveConfigHandler}
          >
            Save the board
          </button>
        </section>
      </div>
    </aside>
  );
}