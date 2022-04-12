const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Todos los productos",
    payload: [
      {
        id: 1,
        name: "Producto 1",
        description: "Descripción del producto 1",
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripción del producto 2",
      },
    ],
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Producto ${id}` });
});

router.post("/", (req, res) => {
  const { name, price } = req.body;

  res.json({ message: "Producto creado", payload: { name, price } });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;

  const { name, price } = req.body;

  res.json({
    message: `Producto ${id} actualizado`,
    payload: { name, price },
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({ message: `Producto ${id} eliminado` });
});

module.exports = router;
