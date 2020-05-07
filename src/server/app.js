//equire('dotenv').config();

const express = require('express');
//const path = require('path');
//const morgan = require('morgan');
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const HttpError = require('./api/lib/utils/http-error');

//const buildPath = path.join(__dirname, '../../dist')

const randomAPIresponseRouter = require('./api/routes/randomAPIresponse.router');

//require('./config/db');

const app = express();

app.use(express.static(__dirname));
const ENV = process.env.NODE_ENV;

if (ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}
//middleware
app.use('/randomAPIresponse',randomAPIresponseRouter);


app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }),
);
//app.use(cookieParser());
app.use(cors());

//app.use(process.env.API_PATH, apiRouter);

/*app.use((err, req, res) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    if (err.body) {
      return res.json(err.body);
    }
    return res.send({ error: err.message });
  }
  res.sendStatus(500);
});*/

app.use('/api/', function(req, res) {
  res.status(404).send("Sorry can't find that!");
});
//Error handling
app.use((error, req, res, next) => {
 res.status(error.status || 500);
 
 res.json({
   error:{
     message: error.message
   }
 });
});
const port= process.env.PORT || 5000;
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});
module.exports = app;