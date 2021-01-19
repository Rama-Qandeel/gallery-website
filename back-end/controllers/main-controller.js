const firebase=require("firebase")

const register=(req, res) => {
    const email=req.body.email;
    const password=req.body.password;
     firebase
     .auth()
     .createUserWithEmailAndPassword(email, password)
     .then(({ user }) => {
      res.json("Account successfully created ")
      
     }).catch((err)=>{
       res.json(err)
     })
    }


 module.exports = {register};