const express = require("express");
//controller sqlite
const controller = require("../controllers/cursosController");
// Cria o roteador
const router = express.Router();
// Endpoints
router.get("/", controller.list);
router.get("/:id/alunos", controller.listStudent);
router.get("/:id", controller.searchById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;