// imports
const express = require('express');
const { getFloras, getFlora, createFlora, updateFlora, deleteFlora } = require('../controllers/floraControllers');

const router = express.Router();

// GET all floras
router.get('/', getFloras);

// GET a single flora
router.get('/:id', getFlora);

// POST a new flora
router.post('/', createFlora);

// UPDATE a flora
router.patch('/:id', updateFlora);

// DELETE a flora
router.delete('/:id', deleteFlora);

module.exports = router;
