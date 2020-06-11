const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myConnection');

const app = express();

//importing routes
const customerRoutes = require('./route/customer');



/// nuevo2


//settings

app.set('port',process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host:   '204.48.30.100',
  user:   'root',
  password: 'PASSWORD',
  port:     3306,
  database: 'Spotify'

},'single'));

app.use(express.urlencoded({extended: false}));

//res.send('works');

//routes
app.use('/', customerRoutes);

//static file
app.use(express.static(path.join(__dirname, 'public')));


//starting the server

app.listen(app.get('port'), () => {
  console.log('Server on port 3000');
});
