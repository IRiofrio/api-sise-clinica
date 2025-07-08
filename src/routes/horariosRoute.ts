import express, { Router } from "express";
import { eliminarHorario, insertarHorario, listarHorarios, modificarHorario, obtenerHorario } from "../controllers/horariosController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

router.get('/',authMiddleware, listarHorarios);
router.get('/:id',authMiddleware, obtenerHorario);
router.post('/',authMiddleware, insertarHorario);
router.put('/:id',authMiddleware, modificarHorario);
router.delete('/:id',authMiddleware, eliminarHorario);

export default router;