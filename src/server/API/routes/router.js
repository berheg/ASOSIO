const express = require('express');
const router = express.Router();
const randomAPIresponseRouter = require('./randomAPIresponse.router');

router.use('/randomAPIresponse', randomAPIresponseRouter);

module.exports = router;