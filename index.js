const express         = require('express');
const app             = express();
const morgan          = require('morgan');
const expressLayouts  = require('express-ejs-layouts');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
mongoose.Promise      = require('bluebird');
const router          = require('./config/routes');
const { dbURI, port, secret } = require('./config/environment');
const session         = require('express-session');
const userAuth        = require('./lib/userAuth');
const flash           = require('express-flash');

const methodOverride  = require('method-override');

mongoose.connect(dbURI, { useMongoClient: true });

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(morgan('dev'));
app.use(expressLayouts);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(session({
  secret: secret,
  resave: false,
  saveUniitialized: false
}));

app.use(flash());

app.use(userAuth);

app.use(router);

app.listen(port, () => console.log(`Express is listening to port ${port}`));
