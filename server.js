const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const hbs = exphbs.create({});
const session = require('express-session');
const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

// // setup express so that it knows we're using handlebars as our
// // template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//setup express to use session cookies
const sessionConfig = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
}
// Express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session(sessionConfig));


sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

