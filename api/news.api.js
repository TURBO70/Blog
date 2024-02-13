const { addNew, allNews, userNews, updateUser, deleteUser } = require('../services/news.services');


const express=require('express')
const router =express.Router()

router.post('/',addNew)
router.get('/',allNews)
router.get('/',userNews)
router.put('/',updateUser)
router.delete('/',deleteUser)
module.exports=router;
