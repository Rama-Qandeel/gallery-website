const express = require('express');
const mainRouter = express.Router();
const ofirebase=require("../firebase/setData")
mainRouter.get('/', (req, res) => {
  res.json('HELLO WORLD');
});

mainRouter.post('/save', (req, res) => {
  ofirebase.saveData(req.body,(err,data)=>{
    res.json(data)
  })
})

module.exports = mainRouter;