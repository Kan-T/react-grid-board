import React from "react";
import { ItemPositionStyle } from "./interfaces";
import classnames from "classnames";
const prefix = "grid-board";

export interface ItemProps {
  id?: string;
  style?: ItemPositionStyle;
  isEditing?: boolean;
  isActiveEditing?: boolean;
  isMax?: boolean;
  setEditItemId?: React.Dispatch<React.SetStateAction<string | undefined>>;
  children?: React.ReactNode;
}

const defaultItemStyle: React.CSSProperties = {
  justifySelf: "stretch",
  alignSelf: "stretch"
};

export function Item (props: ItemProps): React.ReactElement {
  const {
    id,
    style,
    isEditing,
    isActiveEditing,
    isMax,
    setEditItemId,
    children
  } = props;

  const itemStyle = {
    ...defaultItemStyle,
    ...style
  };

  const handleItemClick = () => {
    isEditing && setEditItemId && setEditItemId(id);
  };

  return (
    <section
      data-name="item"
      style={itemStyle}
      className={classnames(`${prefix}-grid-item`, {
        [`${prefix}-item-edit`]: isEditing,
        [`${prefix}-item-max`]: isMax
      })}
      onClick={handleItemClick}
    >
      <div className={classnames({
        [`${prefix}item-edit-active`]: isActiveEditing
      })}
      >
      </div>
      {children}
    </section >
  );
}