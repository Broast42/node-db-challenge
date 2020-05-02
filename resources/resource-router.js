const express = require("express")
const db = require("./resource-modal")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try{
        const  [id] = await db.addResource(req.body)
        const  resource = await db.getResourceById(id)

        res.json(resource)
    }catch(err){
        next(err)
    }
})

router.get("/", async (req, res, next) => {
    try{
        const results = await db.getResources()
        res.json(results)
    }catch(err){
        next(err)
    }
})

module.exports = router