const db = require("../data/config")

function addProject(body){
    return db("project").insert(body)        
}

function getProjects(){
    return db("project")
}

function getProjectsById(id){
    return db("project").select("*").where("id", id).first()
}

module.exports ={
    addProject,
    getProjects,
    getProjectsById,
}