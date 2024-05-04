const { addNew, allNews, userNews, updateUser, deleteUser } = require('../services/news.services');
const {auth} =require('../middleware/authenticaton/auth')

const express=require('express')
const router =express.Router()

router.post('/',auth,addNew)
router.get('/all',auth,allNews)
router.get('/',auth,userNews)
router.put('/',auth,updateUser)
router.delete('/',auth,deleteUser)

module.exports=router;
