const{signup,signin}=require('../services/user.services');
const{userValidation}=require('../middleware/validation/user.valid');
const express=require('express')
const router =express.Router()



router.post('/signup/:id',userValidation,signup)
router.post('/signin',signin)

module.exports=router
