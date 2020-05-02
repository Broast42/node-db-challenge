const db = require("../data/config")

function addResource(body){
    return db("resource").insert(body)        
}

function getResources(){
    return db("resource")
}

function getResourceById(id){
    return db("resource").select("*").where("id", id).first()
}

module.exports ={
    addResource,
    getResources,
    getResourceById,
}