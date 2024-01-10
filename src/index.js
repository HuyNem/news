const express = require('express');
const morgan = require('morgan');
const path = require('path')
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

//static file
app.use(express.static(path.join(__dirname, 'public')));

console.log('>>'+ path.join(__dirname, 'public'))
//Http logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('news/show');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})