const theme = {
  colors: {
    purple: "",
    white: "#FFF",
  },
} as const;

export default theme;

export type Theme = typeof theme;
