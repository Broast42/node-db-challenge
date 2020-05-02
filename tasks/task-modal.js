const db = require("../data/config")

function addTask(body){
    return db("task").insert(body)        
}

function getTasks(){
    return db("task as t")
        .join("project as p", "t.project_id", "p.id")
        .select(
            "p.name as ProjectName",
            "p.description as ProjectDescrip",
            "t.description as TaskDescrip",
            "t.notes",
            "t.completed"
        )
}

function getTasksById(id){
    return db("task").select("*").where("id", id).first()
}

module.exports ={
    addTask,
    getTasks,
    getTasksById,
}