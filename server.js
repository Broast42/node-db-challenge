const express = require('express')
// router imports
const resourceRouter = require('./resources/resource-router')
const projectRouter = require('./projects/project-router')
const taskRouter = require('./tasks/task-router')

const server = express()

server.use(express.json())

// router imports
server.use("/api/resource", resourceRouter)
server.use("/api/project", projectRouter)
server.use("/api/task", taskRouter)

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "An error occured",
	})
})

module.exports = server