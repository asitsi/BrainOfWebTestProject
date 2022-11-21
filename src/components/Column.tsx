import React, { FunctionComponent, ReactNode } from "react";

export type ColumnProps = {
  children: ReactNode;
};

const Column: FunctionComponent<ColumnProps> = (props) => {
  return <td className="Column">{props.children}</td>;
};

export default Column;