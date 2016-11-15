const express = require('express')
const router = express.Router()


router.get('/', function(req, res, next){
	res.render('search/results', {
		query: ''
	})
})

router.get('/q', function(req, res, next){
	console.log(req.query.search)
	res.render('search/results', {
		query: req.query.search
	})
})

module.exports = router;