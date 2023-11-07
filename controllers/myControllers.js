const car = require("../models/myModel.js");

// Create a new car
const createcar = async (req, res) => {
  try {
    const { make, model, year, color, price } = req.body;
    if (!make,!model || !year || !color || !price ) {
      return res
        .status(400)
        .json({ error: "All fields (make, model, year, color , price) are required" });
    }

    const newcar = new car({ make, model, year, color, price });
    const savedcar = await newcar.save();

    res.status(201).json(savedcar);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET allcar
const getcars = async (req, res) => {
  try {
    const cars = await car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single car by ID
const getcar = async (req, res) => {
  try {
    const car = await car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a car by ID
const deletecar = async (req, res) => {
  try {
    const car = await car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }
    res.json({ message: "car deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single car by ID
const patchcar = async (req, res) => {
  try {
    const car = await car.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single car by ID
const putcar = async (req, res) => {
  try {
    const car = await car.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    res.json(car);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createcar,
  getcars,
  getcar,
  deletecar,
  patchcar,
  putcar,
};

