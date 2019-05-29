const games = require('../db/mocks/games');
const users = require('../db/mocks/users');
let comments = require('../db/mocks/comments');
const gameStats = require('../db/mocks/game_stats');

const getAllGames = async (req, res) => {
  res.status(200).json(games);
};

const getGameById = async (req, res) => {
  const id = Number(req.params.id);
  const result = games.find(game => game.id === id);

  res.status(200).json(result);
};

const addNewGame = async (req, res) => {
  const newGame = {
    id: games.length,
    title: req.body.title,
    description: req.body.description,
    thumbnail: req.body.thumbnail || "https://image.flaticon.com/icons/svg/141/141070.svg",
  };

  games.push(newGame);
  res.status(200);
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

const addCommentByGameId = async (req, res) => {
  const gameId = Number(req.params.game_id);
  const newComment = {
    id: comments.length,
    user_id: 1,
    username: "krokowski0x",
    game_id: gameId,
    createdAt: new Date().toString(),
    comment: req.body.comment,
  };
  
  comments.push(newComment);
  res.status(200);
};

const removeCommentByCommentId = async (req, res) => {
  const commentId = Number(req.params.comment_id);
  comments = comments.filter(comment => comment.id !== commentId);

  res.status(200);
};

const getStatsByGameId = async (req, res) => {
  const gameId = Number(req.params.game_id);
  const result = gameStats.filter(statistic => statistic.game_id === gameId);

  res.status(200).json(result);
};

module.exports = {
  getAllGames,
  getGameById,
  addNewGame,
  getUserById,
  getCommentsByGameId,
  addCommentByGameId,
  removeCommentByCommentId,
  getStatsByGameId
};