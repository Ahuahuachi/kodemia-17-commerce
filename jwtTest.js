const jwt = require("./src/lib/jwt");

// jwt.sign({ sub: "12321", name: "Alfredo" }).then((token) => {
//   console.log("El token es: ", token);
// });

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVlMTI5NDI2MjNmN2UxMmFiM2Y3MjciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NTA0MjE1NzIsImV4cCI6MTY1MDQyNTE3Mn0.Pv80t-ffrJFtEp3ajGl9gIW414axttPxR65W89dkC9c";

jwt.verify(token).then((payload) => {
  console.log("El token es: ", payload);
});
