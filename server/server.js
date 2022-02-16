const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const characterRouter = require('./routes/character.router');
const detailsRouter = require('./routes/details.router');
const moveRouter = require('./routes/move.router');
const favoriteRouter = require('./routes/favorite.router');
const favoritePageRouter = require('./routes/favorite.page.router');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/character', characterRouter);
app.use('/api/details', detailsRouter)
app.use('/api/move/', moveRouter)
app.use('/api/favorite/', favoriteRouter);
app.use('/api/favoritepage/', favoritePageRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
