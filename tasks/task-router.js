const express = require("express")
const db = require("./task-modal")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try{
        const  [id] = await db.addTask(req.body)
        const  task = await db.getTasksById(id)

        res.json(task)
    }catch(err){
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try{
        const results = await db.getTasks()
        res.json(results)
    }catch(err){
        next(err)
    }
})

module.exports = router