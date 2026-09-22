const express = require("express");

const router = express.Router();
const estudiantesController = require("../controllers/estudiantes.controllers");

router.get("/", estudiantesController.obtenerEstudiantes);
router.get("/:id", estudiantesController.obtenerEstudiantesPorId);
router.post("/", estudiantesController.crearEstudiante);
router.put("/:id", estudiantesController.actualizarEstudiante);
router.delete("/:id", estudiantesController.eliminarEstudiante);

module.exports = router;
