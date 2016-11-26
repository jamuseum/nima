const express = require('express')
const router = express.Router()
const users = require('../public/test/users')

router.get('/', function(req, res, next){
	res.render('main/index', {
		users: users
	})
})

module.exports = router;