import { spacing, fontSizes } from "./units";

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    default: "#de8430",
    main: "#fcb716",
    light: "#f7ddc5",
    dark: "#673a1e",
    contrastText: white,
  },
  error: {
    main: "#DF835F",
    light: "#FFF3EE",
    contrastText: white,
  },
  success: {
    main: "#2bac20",
    light: "#80fb765e",
    contrastText: white,
  },
  warning: {
    main: "#bdbd31",
    light: "#f8f8da",
    contrastText: white,
  },
  grey: {
    100: "#EAEAEA",
    200: "#C9C5C5",
    300: "#888",
    400: "#666",
    500: "#5b5551",
    line: "#e1e1e1",
  },
};

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)",
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
};

const shape = {
  borderRadius: spacing["xxsmall"],
};

export const theme = {
  palette,
  shadows,
  typography,
  shape,
  fontSizes,
  spacing,
};
