const express = require("express")
const db = require("./project-modal")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try{
        const  [id] = await db.addProject(req.body)
        const  project = await db.getProjectsById(id)

        res.json(project)
    }catch(err){
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try{
        const results = await db.getProjects()
        res.json(results)
    }catch(err){
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    try{
        const results = await db.getDetailedProjectById(req.params.id)
        res.json(results)
    }catch(err){
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
    try{
        const result = await db.updateProject(req.params.id, req.body)
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