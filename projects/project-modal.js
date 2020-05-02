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

async function getDetailedProjectById(id){
    const project = await db("project").where("id", id).first()
    const tasks = await db("task").where("project_id", id)
        .select(
            "id",
            "description",
            "notes",
            "completed"
        )
    const resources = await db("project_resource as pr")
        .join("project as p", "pr.project_id", "p.id" )
        .join("resource as r", "pr.resource_id", "r.id")
        .select(
            "r.id",
            "r.name",
            "r.description"
        )
    
    const result = {
        ...project,
        tasks: tasks,
        resources: resources
    }

    return result
}

module.exports ={
    addProject,
    getProjects,
    getProjectsById,
    getDetailedProjectById,
}