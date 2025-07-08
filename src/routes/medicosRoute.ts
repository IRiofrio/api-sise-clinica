import express, { Router } from "express";
import { 
    eliminarMedico, 
    insertarMedico, 
    listarMedicos, 
    modificarMedico, 
    obtenerMedico 
} from "../controllers/medicosController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

router.get('/', authMiddleware,listarMedicos);
router.get('/:id', authMiddleware,obtenerMedico);
router.post('/', authMiddleware,insertarMedico);
router.put('/:id',authMiddleware, modificarMedico);
router.delete('/:id',authMiddleware, eliminarMedico);

export default router;
