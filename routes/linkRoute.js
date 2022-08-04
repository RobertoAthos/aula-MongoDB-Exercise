const express = require('express')
const router = express.Router()
const linkController = require('../Controller/controller')

router.get('/:title', linkController.redirect)
router.post('/', express.urlencoded({extended:true}), linkController.addLink)
router.get('/', (req,res)=> res.send('hello world'))

module.exports = router