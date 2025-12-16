const express = require("express");
//controller sqlite
const controller = require("../controllers/matriculasController");
// Cria o roteador
const router = express.Router();
// Endpoints
router.get("/", controller.list);
router.get("/:id", controller.searchById);
router.post("/", controller.create);
router.delete("/:id", controller.remove);

module.exports = router;