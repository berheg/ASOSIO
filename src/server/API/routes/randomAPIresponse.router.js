// router setup
const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const randomAPIresponseController = require('../controllers/randomAPIresponse.controller');

// ENDPOINT: /api/randomAPIresponse/ :GET
router.get('/', (req, res, next) => {
    
    try {
      res.json(JSON.stringify(randomAPIresponseController()));
    } catch (error) {
      
    }
       
      //.catch(next);
  });

  module.exports = router;