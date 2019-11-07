const proxy = require("http-proxy-middleware");
module.exports = app => {
  app.use(
    "/fdc/v1/search/",
    proxy({ target: "https://api.nal.usda.gov", changeOrigin: true })
  );
};
