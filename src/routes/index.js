const productsRouter = require("./products");
const usersRouter = require("./users");
const categoriesRouter = require("./categories");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
  app.use("/categories", categoriesRouter);
};

module.exports = apiRouter;
