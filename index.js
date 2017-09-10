const express = require('express');
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


const { dbURI, port } = require('./config/environment');
mongoose.connect(dbURI, { useMongoClient: true });
const expressLayouts  = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(morgan('dev'));

app.get('/', (req, res) => res.render('home'));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
