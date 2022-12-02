import React from "react";
import "./button.css";
import { ButtonComponent, IButtonProps } from "../components/Button/index";

/**
 * Primary UI component for user interaction
 */
export const ButtonComponentUi = ({}: IButtonProps) => {
  return <ButtonComponent value="Click Me" disabled={false}></ButtonComponent>;
};
