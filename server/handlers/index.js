const games = require('../db/mocks/games');
const users = require('../db/mocks/users');
const comments = require('../db/mocks/comments');
const gameStats = require('../db/mocks/game_stats');

const getAllGames = async (req, res) => {
  res.status(200).json(games);
};

const getGameById = async (req, res) => {
  const id = Number(req.params.id);
  const result = games.find(game => game.id === id);

  res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const id = Number(req.params.id);
  const result = users.find(user => user.id === id);

  res.status(200).json(result);
};

const getCommentsByGameId = async (req, res) => {
  const gameId = Number(req.params.game_id);
  const result = comments.filter(comment => comment.game_id === gameId);

  res.status(200).json(result);
};

const getStatsByGameId = async (req, res) => {
  const gameId = Number(req.params.game_id);
  const result = gameStats.filter(statistic => statistic.game_id === gameId);

  res.status(200).json(result);
};

module.exports = {
  getAllGames,
  getGameById,
  getUserById,
  getCommentsByGameId,
  getStatsByGameId
};