// imports
const express = require('express');
const mongoose = require('mongoose');
const Flora = require('../models/floraModels');

const router = express.Router();

// GET all floras
router.get('/', async (req, res) => {
  try {
    const floras = await Flora.find({}).sort({ createdAt: -1 });
    res.status(200).json(floras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single flora
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    const flora = await Flora.findById(id);

    if (!flora) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    res.status(200).json(flora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST a new flora
router.post('/', async (req, res) => {
  try {
    const flora = await Flora.create(req.body);
    res.status(200).json(flora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// UPDATE a flora
router.patch('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    const flora = await Flora.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!flora) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    res.status(200).json(flora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a flora
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    const flora = await Flora.findByIdAndDelete({ _id: id });

    if (!flora) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    res.status(200).json(flora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
