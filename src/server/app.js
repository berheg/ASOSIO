const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');;    
const morgan = require('morgan');
const ENV = process.env.NODE_ENV;

const randomAPIresponseRouter = require('./api/routes/randomAPIresponse.router');
const normalizePort = port => parseInt(port, 10)
const app = express();

app.use(createProxyMiddleware('/randomAPIresponse/', { target: 'https://localhost:5000' }));
//app.use(express.static(__dirname));

if (ENV === 'production') {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}else{
  app.use(morgan('dev'));
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

app.use(cors());

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
const port= normalizePort(process.env.PORT || 5000);
app.listen(port, () =>{
  console.log(`Server listening on port ${port}`);
});
module.exports = app;