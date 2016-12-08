const express = require('express')
const router = express.Router()
const users = require('../public/test/users')
const articles = require('../public/test/fakedata')

router.get('/', function(req, res, next){

res.render('main/index', {
		users: users,
		articles: articles
	})
})

module.exports = router;