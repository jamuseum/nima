const express = require('express')
const app = express()
const engine = require('ejs-mate')

app.use(express.static('public'))

app.engine('ejs', engine)
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
app.use(indexRoutes)

app.listen(3000, function(err){
	if(err) console.log(err);

	console.log("Listening on port 3000")
})