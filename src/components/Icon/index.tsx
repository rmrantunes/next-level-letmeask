import { useThemeMode } from "hooks/useThemeMode";
import { DefaultTheme } from "styled-components";
import Sun from "./Sun";
import Moon from "./Moon";

const IconVariants = {
  Sun,
  Moon,
};

export type AbstractIconProps = {
  stroke?: string;
  fill?: string;
};

type IconProps = {
  stroke?: keyof DefaultTheme["colors"];
  fill?: keyof DefaultTheme["colors"];
  variant: keyof typeof IconVariants;
};

const Icon = (props: IconProps) => {
  const { theme } = useThemeMode();

  const IconVariant = IconVariants[props.variant];

  const strokeColor = props.stroke && theme.colors[props.stroke];
  const fillColor = props.fill && theme.colors[props.fill];

  return <IconVariant stroke={strokeColor} fill={fillColor} />;
};

export default Icon;
