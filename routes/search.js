const express = require('express')
const router = express.Router()
const users = require('../public/test/users')


router.get('/', function(req, res, next){
	res.render('search/results', {
		query: '',
		users: users
	})
})

router.get('/q', function(req, res, next){
	console.log(req.query.search)
	res.render('search/results', {
		query: req.query.search,
		users: users
	})
})

module.exports = router;