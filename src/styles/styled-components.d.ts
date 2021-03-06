import { Theme, DarkTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable-next-line @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends Theme, DarkTheme {
    mode: "dark" | "light";
  }
}
