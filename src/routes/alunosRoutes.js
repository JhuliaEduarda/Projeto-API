const express = require("express");
//controller sqlite
const controller = require("../controllers/alunosController");
// Cria o roteador
const router = express.Router();
// Endpoints
router.get("/", controller.list);
router.get("/:id/cursos", controller.listCourses);
router.get("/:id", controller.searchById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

module.exports = router;