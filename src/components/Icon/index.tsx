import { useThemeMode } from "hooks/useThemeMode";
import { DefaultTheme } from "styled-components";
import Sun from "./Sun";
import Moon from "./Moon";
import { SVGAttributes } from "react";

const IconVariants = {
  Sun,
  Moon,
};

export type AbstractIconProps = {
  stroke?: string;
  fill?: string;
} & SVGAttributes<HTMLOrSVGElement>;

type IconProps = {
  stroke?: keyof DefaultTheme["colors"];
  fill?: keyof DefaultTheme["colors"];
  variant: keyof typeof IconVariants;
} & SVGAttributes<HTMLOrSVGElement>;

const Icon = ({ stroke, fill, variant, ...props }: IconProps) => {
  const { theme } = useThemeMode();

  const IconVariant = IconVariants[variant];

  const strokeColor = stroke && theme.colors[stroke];
  const fillColor = fill && theme.colors[fill];

  return <IconVariant stroke={strokeColor} fill={fillColor} {...props} />;
};

export default Icon;
