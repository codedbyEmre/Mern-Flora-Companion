// imports
const express = require('express');

const router = express.Router();

// GET all floras
router.get('/', (req, res) => {
  res.json({ mssg: 'GET all floras' });
});

// GET a single flora
router.get('/:id', (req, res) => {
  res.json({ mssg: 'GET a single flora' });
});

// POST a new flora
router.post('/', (req, res) => {
  res.json({ mssg: 'POST a new flora' });
});

// UPDATE a flora
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'UPDATE a flora' });
});

// DELETE a flora
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'DELETE a flora' });
});

module.exports = router;
