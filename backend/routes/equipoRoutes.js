
const express = require('express');
const router = express.Router();
const equiposController = require('../controllers/equiposController');

router.get('/', equiposController.getEquipos);
router.get('/:id', equiposController.getEquipoById);
router.post('/', equiposController.createEquipo);
router.put('/:id', equiposController.updateEquipo);
router.delete('/:id', equiposController.deleteEquipo);

module.exports = router;
