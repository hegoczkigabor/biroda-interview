import { FC } from "react";

export interface LabelProps {
  maxLength: number;
  value: string;
}

export const Label: FC<LabelProps> = ({ maxLength, value }) => (
  <>{value.length > maxLength ? `${value.substr(0, 20)}...` : value}</>
);