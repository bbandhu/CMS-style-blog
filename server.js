const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});
const session = require('express-session');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();

const PORT = process.env.PORT || 3001;

// // setup express so that it knows we're using handlebars as our
// // template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//setup express to use session cookies
const sessionConfig = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day

  },
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.

  store: new SequelizeStore({
    db: sequelize,
  }),
}
// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session(sessionConfig));

express.Router().use(routes);
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

