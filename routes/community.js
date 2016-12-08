const express = require('express')
const router = express.Router()
const users = require('../public/test/users')
const articles = require('../public/test/fakedata')

router.get('/', function(req, res, next){
	res.render('community/user', {
		users: users,
		articles:articles
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