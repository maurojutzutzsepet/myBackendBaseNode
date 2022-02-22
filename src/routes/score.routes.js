const express = require("express");
const router = express.Router();
const scoreController = require("../controllers/score/score.controller");

/**
 * @swagger
 * /score:
 *   get:
 *     summary: "obtiene todas las puntuaciones"
 *     description: devuelve todas las puntuaciones del sistema
 *     tags: [SCORE]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/systemHeader"
 *     responses:
 *       200:
 *         description: ok
 *       401:
 *         description: No unAuthorized
 *       400:
 *         description: Error in validation or in headers
 */
router.get("/score", scoreController.getScores);

/**
 * @swagger
 * /score/{id_score}:
 *   get:
 *     summary: "obtiene todas las puntuaciones"
 *     description: devuelve todas las puntuaciones del sistema
 *     tags: [SCORE]
 *     security:
 *         - Bearer: []
 *     parameters:
 *         - $ref: "#/parameters/systemHeader"
 *         - $ref: "#/parameters/id_score"
 *     responses:
 *       200:
 *         description: ok
 *       401:
 *         description: No unAuthorized
 *       400:
 *         description: Error in validation or in headers
 */
router.get("/score/:id_score", scoreController.getScoreById);

module.exports = router;
