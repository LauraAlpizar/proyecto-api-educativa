const router = require("express").Router();
const controller = require("../controllers/cursos.controller");
const auth = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Endpoints relacionados con la gestión de cursos.
 */

/**
 * @swagger
 * /api/cursos:
 *  get:
 *    summary: Lista todos los cursos disponibles.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Lista de cursos.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Curso'
 *      401:
 *        description: No autorizado (Token JWT faltante o inválido).
 */
router.get("/", auth, controller.listarCursos);

/**
 * @swagger
 * /api/cursos/{id}:
 *  get:
 *    summary: Obtiene un curso específico por su ID.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: ID del curso a obtener.
 * responses:
 *      200:
 *        description: Detalles del curso.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Curso'
 *      404:
 *        description: Curso no encontrado.
 */
router.get("/:id", auth, controller.obtenerCurso);

/**
 * @swagger
 * /api/cursos:
 *  post:
 *    summary: Crea un nuevo curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Curso'
 *    responses:
 *      200:
 *        description: El curso ha sido creado exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Curso'
 *      401:
 *        description: No autorizado.
 */
router.post("/", auth, controller.crearCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *  put:
 *    summary: Actualiza completamente un curso existente por ID.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso a actualizar.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Curso'
 *    responses:
 *      200:
 *        description: El curso ha sido actualizado.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Curso'
 *      404:
 *        description: Curso no encontrado.
 */
router.put("/:id", auth, controller.actualizarCurso);

/**
 * @swagger
 * /api/cursos/{id}:
 *  delete:
 *    summary: Elimina un curso específico por su ID.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso a eliminar.
 *    responses:
 *      200:
 *        description: Curso eliminado exitosamente.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MensajeGenerico'
 *      404:
 *        description: Curso no encontrado.
 */
router.delete("/:id", auth, controller.eliminarCurso);

/**
 * @swagger
 * /api/cursos/{id}/notas:
 *  get:
 *    summary: Obtiene la lista de notas para un curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso.
 *    responses:
 *      200:
 *        description: Lista de notas (respuesta de ejemplo).
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: "Notas del curso"
 *      404:
 *        description: Curso no encontrado.
 */
router.get("/:id/notas", auth, (req, res) => res.json({ msg: "Notas del curso" }));

/**
 * @swagger
 * /api/cursos/{id}/notas:
 *  post:
 *    summary: Agrega una nueva nota al curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/NotaRequest'
 *    responses:
 *      200:
 *        description: Nota creada exitosamente (respuesta de ejemplo).
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MensajeGenerico'
 *      401:
 *        description: No autorizado.
 */
router.post("/:id/notas", auth, (req, res) => res.json({ msg: "Nota creada" }));

/**
 * @swagger
 * /api/cursos/{id}/galeria:
 *  get:
 *    summary: Obtiene la galería de imágenes del curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso.
 *    responses:
 *      200:
 *        description: Lista de fotos (respuesta de ejemplo).
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: "Fotos del curso"
 *      404:
 *        description: Curso no encontrado.
 */
router.get("/:id/galeria", auth, (req, res) => res.json({ msg: "Fotos del curso" }));

/**
 * @swagger
 * /api/cursos/{id}/galeria:
 *  post:
 *    summary: Sube una nueva foto a la galería del curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso.
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GaleriaRequest'
 *    responses:
 *      200:
 *        description: Foto subida exitosamente (respuesta de ejemplo).
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/MensajeGenerico'
 *      401:
 *        description: No autorizado.
 */
router.post("/:id/galeria", auth, (req, res) => res.json({ msg: "Foto subida" }));

/**
 * @swagger
 * /api/cursos/{id}/anuncios:
 *  get:
 *    summary: Obtiene la lista de anuncios del curso.
 *    tags: [Cursos]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID del curso.
 *    responses:
 *      200:
 *        description: Lista de anuncios (respuesta de ejemplo).
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                msg:
 *                  type: string
 *                  example: "Anuncios del curso"
 *      404:
 *        description: Curso no encontrado.
 */
router.get("/:id/anuncios", auth, (req, res) => res.json({ msg: "Anuncios del curso" }));

module.exports = router;
