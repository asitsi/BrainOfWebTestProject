import React, { FunctionComponent, ReactNode } from "react";

export type RowProps = {
    children: ReactNode;
};

const Row: FunctionComponent<RowProps> = (props) => {
  return <tr>{props.children}</tr>;
};

export default Row;
