import express, { Router } from "express";
import { 
  eliminarCita, 
  insertarCita, 
  listarCitas, 
  modificarCita, 
  obtenerCita 
} from "../controllers/citasController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

router.get('/',authMiddleware,listarCitas);
router.get('/:id',authMiddleware, obtenerCita);
router.post('/', authMiddleware,insertarCita);
router.put('/:id',authMiddleware, modificarCita);
router.delete('/:id', authMiddleware,eliminarCita);

export default router;
