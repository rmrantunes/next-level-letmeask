import { ButtonHTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
import * as S from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  bgColor?: keyof DefaultTheme["colors"];
};

const Button = (props: ButtonProps) => {
  return <S.Wrapper {...props} />;
};

export default Button;
