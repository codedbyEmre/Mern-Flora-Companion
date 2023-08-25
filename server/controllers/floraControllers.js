// imports
const Flora = require('../models/floraModels');
const mongoose = require('mongoose');

// get all floras
const getFloras = async (req, res) => {
  const user_id = req.user._id;

  try {
    const floras = await Flora.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(floras);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single flora
const getFlora = async (req, res) => {
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
};

// create a flora
const createFlora = async (req, res) => {
  try {
    const user_id = req.user._id;
    req.body.user_id = user_id;

    const flora = await Flora.create(req.body);
    res.status(200).json(flora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a flora
const updateFlora = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    const flora = await Flora.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!flora) {
      return res.status(404).json({ error: 'There is no such flora!' });
    }

    const editedFlora = await Flora.findById(id);

    res.status(200).json(editedFlora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a flora
const deleteFlora = async (req, res) => {
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
};

module.exports = { getFloras, getFlora, createFlora, updateFlora, deleteFlora };
