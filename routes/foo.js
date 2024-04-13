const express = require("express");
const router = express.Router();
// test 
const Rocket = require('../models/rocket.model');

router.route('/')
  .get((req,res)=>{
    try{
      Rocket.find()
        .then(blocks => res.status(200).json({blocks, Message: "GOOD JOB"}))
    } catch(e){
      res.status(400).json({Error: e})
    }

    //res.status(200).json({MSG:"Hello there"})
  })
  .post(async (req, res)=>{
    try{
      //Error Check Here
      //
      const { name } = req.body
      const block = new Rocket({name: name})
      await block.save()
      .then((data) => res.json(data))
      .catch(e => res.status(400).json({Error: "Unable to create a new Rocket " + e}))
    }  catch(e){
        res.status(400).json({Error: "Unable to Post " + e})
    }
  })

module.exports = router;
