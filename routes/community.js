const express = require('express')
const router = express.Router()
const users = require('../public/test/users')

router.get('/', function(req, res, next){
	res.render('community/user', {
		users: users
	})
})
// router.get('/', function(req, res, next){
// 	res.render('community/user', {
// 		user: ''
// 	})
// })
router.get('/profile', function(req, res, next){
	res.render('community/user_profile', {
		users:users
	})
})

module.exports = router;