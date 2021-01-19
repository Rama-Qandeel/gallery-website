const express = require('express');
const mainRouter = express.Router();
const ofirebase=require("../firebase/setData")
const {register,login}=require("../controllers/main-controller")


// mainRouter.post('/save', (req, res) => {
//   ofirebase.saveData(req.body,(err,data)=>{
//     res.json(data)
//   })
// })

mainRouter.post('/reg',register) 
mainRouter.post('/login',login) 
    
  
 


module.exports = mainRouter;