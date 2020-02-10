const Router=require('express').Router();
let User=require('../models/user.model');

Router.route('/').get((req,res)=>{
    User.find()
    .them(users=>res.json(User))
    .catch(err=>res.status(400).json('Error:'+err));
});

Router.route('/add').post((req,res)=>{
    const username=req.body.username;

    const newUser=new User({username});
    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error:'+err));
});

module.exports=Router;