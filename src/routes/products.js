const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const { header1 } = req.headers;

  res.json({ message: "Todos los productos", header1 });
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
