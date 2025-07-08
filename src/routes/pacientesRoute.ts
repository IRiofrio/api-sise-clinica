import express, { Router } from "express";
import { 
  eliminarPaciente, 
  insertarPaciente, 
  listarPacientes, 
  modificarPaciente, 
  obtenerPaciente 
} from "../controllers/pacientesController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

router.get('/', authMiddleware,listarPacientes);
router.get('/:id',authMiddleware, obtenerPaciente);
router.post('/',authMiddleware, insertarPaciente);
router.put('/:id',authMiddleware, modificarPaciente);
router.delete('/:id',authMiddleware, eliminarPaciente);

export default router;
