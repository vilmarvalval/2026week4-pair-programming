const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  res.json({ message: "Hello from getAll" });
};

const createUser = (req, res) => {
  res.json({ message: "Hello from create" });
};

const getUserById = (req, res) => {
  res.json({ message: "Hello from getById" });
};

const updateUser = (req, res) => {
  res.json({ message: "Hello from update" });
};

const deleteUser = (req, res) => {
  res.json({ message: "Hello from delete" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};