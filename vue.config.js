module.exports = {
  publicPath: "./",
  devServer: {
    publicPath: process.env.NODE_ENV === "production" ? "/haveyoueaten/" : "/",
    port: 8888,
    host: "localhost",
    https: false,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
