import { ButtonHTMLAttributes } from "react";

import "styles/button.scss";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

const Button = ({ isOutlined, ...props }: ButtonProps) => {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props} />
  );
};

export default Button;
