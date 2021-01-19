const express = require('express');
const mainRouter = express.Router();
const ofirebase=require("../firebase/setData")
const {register}=require("../controllers/main-controller")


// mainRouter.post('/save', (req, res) => {
//   ofirebase.saveData(req.body,(err,data)=>{
//     res.json(data)
//   })
// })

mainRouter.post('/reg',register) 
    
  
 


module.exports = mainRouter;