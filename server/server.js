const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const handlers = require('./handlers/user');

const app = express();
const API_PORT = 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', handlers.getUsers);
app.get('/users/:id', handlers.getUserById);
app.post('/users', handlers.createUser);
app.put('/users/:id', handlers.updateUser);
app.delete('/users/:id', handlers.deleteUser);

app.listen(API_PORT, () => {
  console.log(`App running on port ${API_PORT}.`);
});
