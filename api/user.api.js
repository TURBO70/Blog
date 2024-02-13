const{signup,signin}=require('../services/user.services');
const express=require('express')
const router =express.Router()



router.post('/signup',signup)
router.post('/signin',signin)

module.exports=router
