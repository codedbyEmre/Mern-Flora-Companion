// imports
const express = require('express');
const { getFloras, getFlora, createFlora, updateFlora, deleteFlora } = require('../controllers/floraControllers');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();

router.use(requireAuth);

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
