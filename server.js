const express = require('express')
const app = express()
const engine = require('ejs-mate')
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.engine('ejs', engine)
app.set('view engine', 'ejs')

const indexRoutes = require('./routes/index')
const userRoutes = require('./routes/community')
const searchRoutes = require('./routes/search')

app.use(indexRoutes)
app.use('/user', express.static(__dirname + '/public'), userRoutes)
app.use('/search', express.static(__dirname + '/public'), searchRoutes)


app.listen(port, function(err){
	if(err) console.log(err);

	console.log("Listening on port " + port)
})