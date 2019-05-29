const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const handlers = require('./handlers');

const app = express();
const API_PORT = 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/games', handlers.getAllGames);
app.get('/games/:id', handlers.getGameById);
app.post('/games', handlers.addNewGame);
app.get('/users/:id', handlers.getUserById);
app.get('/comments/:game_id', handlers.getCommentsByGameId);
app.post('/comments/:game_id', handlers.addCommentByGameId);
app.delete('/comments/:comment_id', handlers.removeCommentByCommentId);
app.get('/game_stats/:game_id', handlers.getStatsByGameId);

app.listen(API_PORT, () => {
  console.log(`App running on port ${API_PORT}.`);
});
