const express = require("express");
const apiRouter = require("./src/routes");
const { errorHandler, logErrors } = require("./src/middlewares/errorHandler");
const db = require("./src/lib/db");
const config = require("./src/lib/config");
const app = express();
const port = config.app.port;

app.use(express.json());

apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `Welcome to ${config.app.name} app, now listening on port ${port}`
  );

  db.connect()
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("Connection refused:", err);
    });
});
