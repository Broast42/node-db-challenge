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

router.put("/:id", async (req, res, next) => {
    try{
        const result = await db.updateTask(req.params.id, req.body)
        res.status(201).json(result)
    }catch(err){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        const result = await db.remove(req.params.id)
        res.json(result)
    }catch(err){
        next(err)
    }
})

module.exports = router