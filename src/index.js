const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { engine } = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;

const route = require('./routes');

//connect to db
const db = require('./config/db')
db.connect();

//static file
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(express.urlencoded());
app.use(express.json());

//Http logger
app.use(morgan('combined'));

//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      eq: (c, d) => c === d,
    }
  }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//method override
app.use(methodOverride('_method'))

//route init
route(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})