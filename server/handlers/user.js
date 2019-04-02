const db = require('../../db');

const getUsers = async (req, res) => {
  const result = await db.query('SELECT * FROM users ORDER BY id ASC');

  res.status(200).json(result.rows);
};

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);

  res.status(200).json(result.rows);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const result = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email]
  );

  res.status(201).send(`User added with ID: ${result.insertId}`);
};

const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;
  await db.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
    name,
    email,
    id
  ]);

  res.status(200).send(`User modified with ID: ${id}`);
};

const deleteUser = async (req, res) => {
  const id = Number(req.params.id);
  await db.query('DELETE FROM users WHERE id = $1', [id]);

  res.status(200).send(`User deleted with ID: ${id}`);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
