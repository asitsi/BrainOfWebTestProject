import React, { FunctionComponent, ReactNode } from "react";

export type AxisCellProps = {
  children?: ReactNode;
};

const AxisCell: FunctionComponent<AxisCellProps> = (props) => {
  return <th className="AxisCell">{props.children}</th>;
};

export default AxisCell;