import moment from "moment";

/**
 * Truncate
 * returns the truncated text with "..." or any specified ending character
 * @param {String} str
 * @param {Number} length
 * @param {String} ending
 * */
export const truncate = (str = "", length = 20, ending = "...") =>
  str.length > length
    ? `${str.substring(0, length - ending.length)} ${ending}`
    : str;

/**
 * formatDate
 * Returns a moment formatted date
 * @param {Date} date
 * @param options
 * */
export const formatDate = (
  date,
  options = {
    format: "DD, MM YYYY",
    fromNow: false,
  }
) => {
  if (options["format"]) {
    return moment(date).format(options.format);
  }

  if (options["fromNow"]) {
    return moment(date).fromNow();
  }

  return moment(date).format(options.format);
};

/**
 * getColorFromTheme
 *getColorFromTheme returns the  actual color of the   provided coloerTheme
 * @param {String} colorTheme
 * @param {Object} theme
 */
export const getColorFromTheme = ({ colorTheme, theme }) => {
  return colorTheme
    ? colorTheme === "primary/default"
      ? theme.palette.primary.default
      : colorTheme === "primary/main"
      ? theme.palette.primary.main
      : colorTheme === "primary/light"
      ? theme.palette.primary.light
      : colorTheme === "primary/dark"
      ? theme.palette.primary.dark
      : colorTheme === "grey[100]"
      ? theme.palette.grey[100]
      : colorTheme === "grey[200]"
      ? theme.palette.grey[200]
      : colorTheme === "grey[300]"
      ? theme.palette.grey[300]
      : colorTheme === "grey[400]"
      ? theme.palette.grey[400]
      : colorTheme === "grey[500]"
      ? theme.palette.grey[500]
      : colorTheme === "white"
      ? theme.palette.common.white
      : colorTheme === "black"
      ? theme.palette.common.black
      : "blue"
    : "'red";
};

/**
 * getSpacingFromTheme
 *getSpacingFromTheme returns the  actual spcae of the   provided spacetheme
 * @param {String} spacing
 * @param {Object} theme
 */
export const getSpacingFromTheme = ({ spacing, theme }) => {
  return spacing
    ? spacing === "none"
      ? theme.spacing.none
      : spacing === "xxsmall"
      ? theme.spacing.xxsmall
      : spacing === "xsmall"
      ? theme.spacing.xsmall
      : spacing === "small"
      ? theme.spacing.small
      : spacing === "medium"
      ? theme.spacing.medium
      : spacing === "gutter"
      ? theme.spacing.gutter
      : spacing === "large"
      ? theme.spacing.large
      : spacing === "xlarge"
      ? theme.spacing.xlarge
      : spacing === "xxlarge"
      ? theme.spacing.xxlarge
      : spacing === "res_xsmall"
      ? theme.spacing.res_xxsmall
      : spacing === "res_xsmall"
      ? theme.spacing.res_xsmall
      : spacing === "res_small"
      ? theme.spacing.res_small
      : spacing === "res_large"
      ? theme.spacing.res_large
      : spacing === "res_xlarge"
      ? theme.spacing.res_xlarge
      : spacing === "res_xxlarge"
      ? theme.spacing.res_xxlarge
      : 0
    : 0;
};
