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
 * Capitalize
 * returns a capitalized sentence
 * @param {String} sentence
 * */
export const capitalizeWords = (sentence) => {
  if (!sentence) return;

  if (sentence.length === 1) return sentence.toUpperCase();

  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * getInitials
 * Returns the first letters of the passed strings
 * @param {String} fName
 * @param {String} lName
 * */
export const getInitials = (fName = "", lName = "") =>
  `${fName.charAt(0).toUpperCase()}${lName.charAt(0).toUpperCase()}`;

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

/*
 * shadeColor
 * Lighten or Darken a color
 * usage [lighten]: shadeColor(#DD23EF, 20)
 * usage [darken]: shadeColor(#DD23EF, -20)
 * */
export const shadeColor = (col, amt) => {
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};

/**
 * isNotEmpty return true if the object is not empty
 * @param {Object} obj
 * */
export function isNotEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return true;
  }

  return false;
}

/**
 *extractInThrees returns an array of strins splitted in threes
 */
export function extractInThrees(str) {
  return str.match(/.{1,4}/g);
}

/**
 *getColorFromTheme returns the  actual color of the   provided coloerTheme
 */
export const getColorFromTheme = ({ colorTheme, theme }) => {
  return colorTheme
    ? // -----------primary-----------
      colorTheme === "primary/default"
      ? theme.palette.primary.default
      : colorTheme === "primary/main"
      ? theme.palette.primary.main //done
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
      : // -------------------  white----------------
      colorTheme === "white"
      ? theme.palette.common.white
      : // -----------------------background----------
      colorTheme === "black"
      ? theme.palette.common.black
      : //   ----------------------lastlt--------------
        "blue"
    : "'red";
};

/**
 *getSpacingFromTheme returns the  actual spcae of the   provided spacetheme
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
