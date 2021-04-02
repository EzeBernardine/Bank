import { spacing, fontSizes } from "./units";

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white,
  },
  primary: {
    default: "orange",
    main: "#fcb716",
    light: "#146DD6",
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
  grey: {
    100: "#EAEAEA",
    200: "#C9C5C5",
    300: "#888",
    400: "#666",
    500: "#5b5551",
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
