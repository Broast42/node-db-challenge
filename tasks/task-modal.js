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

function updateTask(id, body){
    return db("task").where("id", id).update(body)
}

function remove(id){
    return db("task").where("id", id).del()
}

module.exports ={
    addTask,
    getTasks,
    getTasksById,
    updateTask,
    remove
}