import express,{ Router } from "express";
import { eliminarEspecialidad, insertarEspecialidad, listarEspecialidades, modificarEspecialidad, obtenerEspecialidad } from "../controllers/especialidadesController";
import { authMiddleware } from "../auth/auth.middleware";

const router: Router = express.Router();

router.get('/',authMiddleware, listarEspecialidades);
router.get('/:id',authMiddleware, obtenerEspecialidad);
router.post('/',authMiddleware, insertarEspecialidad);
router.put('/:id',authMiddleware, modificarEspecialidad);
router.delete('/:id', authMiddleware,eliminarEspecialidad);


export default router;

