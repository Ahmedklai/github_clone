import React from "react";
import { Button } from "./styles";

export interface IButtonProps {
  value: string;
  disabled: boolean;
}
export const ButtonComponent = (props: IButtonProps) => (
  <Button type="submit" value={props.value} disabled={props.disabled} />
);
