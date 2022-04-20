const jwt = require("./src/lib/jwt");

// jwt.sign({ sub: "12321", name: "Alfredo" }).then((token) => {
//   console.log("El token es: ", token);
// });

jwt
  .verify(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVlMTI5NDI2MjNmN2UxMmFiM2Y3MjciLCJuYW1lIjoiRWwgbm9tYnJlIGRlbCB1c3VhcmlvIiwiaWF0IjoxNjUwNDE1NjI0LCJleHAiOjE2NTA0MTU2MzR9.fk-5NhUtPE9dhK9HpEmoA5_o1q14bO6Pc3SlUqGuMs4"
  )
  .then((token) => {
    console.log("El token es: ", token);
  });
