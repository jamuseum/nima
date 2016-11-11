const express = require('express')
const router = express.Router()


router.get('/', function(req, res, next){
	res.render('community/user', {
		user: 'susan2'
	})
})
// router.get('/', function(req, res, next){
// 	res.render('community/user', {
// 		user: ''
// 	})
// })
router.get('/profile', function(req, res, next){
	res.render('community/user_profile')
})

module.exports = router;