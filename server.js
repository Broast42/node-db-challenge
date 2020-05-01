const express = require('express')
// router imports
const resourceRouter = require('./resources/resource-router')

const server = express()

server.use(express.json())

// router imports
server.use("/api/resource", resourceRouter)


//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "An error occured",
	})
})

module.exports = server