const dev = process.env.NODE_ENV === "development";

/**
 * return the base url
 */
const url = dev
  ? "http://localhost:3001/"
  : "https://banktest-server-8080.herokuapp.com/";

export default url;
