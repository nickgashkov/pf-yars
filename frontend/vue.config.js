module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true
      }
    }
  },
  indexPath: "../../templates/index.html",
  baseUrl: process.env.NODE_ENV === "production" ? "/static/" : "/"
};
