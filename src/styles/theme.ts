const theme = {
  colors: {
    black: "#29292E",
    shadow: "#050206",
    purple: "#835AFD",
    danger: "#E73F5D",
    google: "#ea4335",
    grayDark: "#737380",
    grayMedium: "#A8A8B3",
    grayLight: "#DBDCDD",
    pinkDark: "#E559F9",
    pinkLight: "#D67EE2",
    white: "#FFFFFF",
  },
  shadow: {
    sm: "0 2px 12px 0 rgba(0,0,0,0.04)",
  },
  font: {
    base: "400",
    medium: "500",
    semibold: "700",
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

export default theme;

export type Theme = typeof theme;
