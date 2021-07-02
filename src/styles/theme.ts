const theme = {
  colors: {
    bw1: "#29292E",
    bw2: "#737380",
    bw3: "#A8A8B3",
    bw4: "#DBDCDD",
    bw5: "#FFFFFF",
    purple: "#835AFD",
    danger: "#E73F5D",
    google: "#ea4335",
    pinkDark: "#E559F9",
    pinkLight: "#D67EE2",
    shadow: "rgba(0,0,0,0.04)",
  },
  shadow: {
    sm: "0 2px 12px 0 rgba(0,0,0,0.04)",
  },
  font: {
    base: "400",
    medium: "500",
    bold: "700",
    poppins: "'Poppins', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
  text: {
    sm: "0.875rem",
    base: "1rem",
    "2lg": "1.5rem",
  },
  rounded: {
    lg: "0.5rem",
    full: "9999px",
  },
  sizes: {
    "0": "0",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
    "20": "5rem",
    "24": "6rem",
    "32": "8rem",
    "40": "10rem",
    "48": "12rem",
    "56": "14rem",
    "64": "16rem",
    "80": "20rem",
    px: "1px",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
  },
} as const;

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bw1: "#FFFFFF",
    bw2: "#DBDCDD",
    bw3: "#A8A8B3",
    bw4: "#737380",
    bw5: "#29292E",
  },
} as const;

export default theme;

export type Theme = typeof theme;

export type DarkTheme = typeof darkTheme;
