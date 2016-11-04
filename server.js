const express = require('express')
const app = express()
const engine = require('ejs-mate')
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.engine('ejs', engine)
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
app.use(indexRoutes)

app.listen(port, function(err){
	if(err) console.log(err);

	console.log("Listening on port " + port)
})