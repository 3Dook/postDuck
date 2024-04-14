const express = require("express");
const router = express.Router();
// test 
const Rocket = require('../models/rocket.model');

router.route('/')
  .get((req,res)=>{
    try{
      Rocket.find()
        .then(blocks => res.status(200).json(blocks))
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

router.route('/:id')
  .get((req, res)=>{
    try{
      Rocket.findById(req.params.id)
        .then(block => res.status(200).json(block))
    } catch(e){
      res.status(402).json({Error: 'unable to find - ' + e})
    }
  })
  .put((req,res)=>{
      Rocket.findById(req.params.id)
      .then(block =>{
          //Error Check here
          //
          block.name = req.body.name;

          block.save()
          .then(data => res.status(202).json(data))
          .catch(e => res.status(400).json({Error: "Unable to update" + e}))
      })
      .catch(e => res.status(400).json({Error: "Unable to update" + e}))
  })
  .patch((req,res)=>{
    Rocket.findById(req.params.id)
      .then(block =>{
        //Error Check here
        //
        block.name = req.body.name;

        block.save()
        .then(data => res.status(202).json(data))
        .catch(e => res.status(400).json({Error: "Unable to patch" + e}))
    })
    .catch(e => res.status(400).json({Error: "Unable to patch" + e}))
  })
  .delete((req,res)=>{
    console.log(req.params)
    Rocket.findByIdAndDelete(req.params.id)
    .then((data)=>{res.status(202).json({Message: "Rocket DELETED - "+ data})})
    .catch(e => res.status(400).json({Error: "Unable to DELETE" + e}))
  })
module.exports = router;
