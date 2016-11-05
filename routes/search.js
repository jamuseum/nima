const express = require('express')
const router = express.Router()


router.get('/', function(req, res, next){
	res.render('search/results', {
		query: ''
	})
})

router.get('/:query', function(req, res, next){

	res.render('search/results', {
		query: req.params.query
	})
})

module.exports = router;