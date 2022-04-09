const productsRouter = require("./products");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
};

module.exports = apiRouter;
