import express,{ Router } from "express";
import { eliminarTipoDocumento, insertarTipoDocumento, listarTipoDocumentos, modificarTipoDocumento, obtenerTipoDocumento } from "../controllers/tipoDocumentoController";
import { authMiddleware } from "../auth/auth.middleware";



const router: Router = express.Router();

/** 
 * @swagger
 * tags:
 *   - name: TipoDocumento
 *     description: Gestion de tipos de documentos
 */

router.get('/', authMiddleware, listarTipoDocumentos);
/**
 * @swagger
 * /api/v1/tipo-documentos:
 *   get:
 *     summary: Listar todos los tipos de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista obtenida correctamente
 */

router.get('/:id',authMiddleware, obtenerTipoDocumento);

/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   get:
 *     summary: Obtener un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del tipo de documento a obtener
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tipo de documento obtenido correctamente
 */



router.post('/', authMiddleware, insertarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos:
 *   post:
 *     summary: Crear un nuevo tipo de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de documento creado correctamente
 */

router.put('/:id',authMiddleware, modificarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   put:
 *     summary: Modificar un tipo de documento por ID
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *        - in: path
 *          name: id
 *          required: tue
 *          description: ID del tipo de documento a modificar
 *          schema:
 *            type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de documento creado correctamente
 */

router.delete('/:id',authMiddleware, eliminarTipoDocumento);
/**
 * @swagger
 * /api/v1/tipo-documentos/{id}:
 *   delete:
 *     summary: Eliminar un tipo de documento
 *     tags: [TipoDocumento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Eliminado correctamente
 */

export default router;

