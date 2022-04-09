const express = require("express");
const apiRouter = require("./src/routes");
const app = express();
const port = 8000;

app.use(express.json());

apiRouter(app);

app.listen(port, () => {
  console.log("listening on port 8000");
});
