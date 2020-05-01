const express = require('express')
// router imports

const server = express()

server.use(express.json())

// router imports

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "An error occured",
	})
})

module.exports = server