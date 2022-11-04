const path = require('path');
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('dev'));

// Path
const viewsPath = path.join(__dirname,'../views/');
const publicPath = path.join(__dirname, '../public/');

// static path.
app.use(express.static(publicPath));

// HBS
app.set('view enginge','hbs');
app.set('views', viewsPath);

// Routes
app.get("/", (req, res) => {
  res.render('index.hbs',{
    title:"Home",
    header:"Home page",
    image: true
  });
})

app.get("/contact", (req, res) => {
  res.render('index.hbs',{
    title:"Contact",
    header:"Contact page",
    image: false
  });
})


app.listen(3000,  () => {
  console.log(`Server running on http://localhost:3000`)
});