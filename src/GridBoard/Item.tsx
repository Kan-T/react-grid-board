import React from "react";
import { ItemStyle } from "./interfaces";
import classnames from "classnames";
const prefix = "grid-board";

export interface ItemProps {
  id?: string;
  style?: ItemStyle;
  isEditing?: boolean;
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
        [`${prefix}-grid-edit`]: isEditing,
        [`${prefix}-grid-item-max`]: isMax
      })}
      onClick={handleItemClick}
    >
      {children}
    </section >
  );
}