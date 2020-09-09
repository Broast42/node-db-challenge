
exports.up = async function(knex) {
    await knex.schema.createTable("project", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed").defaultTo(false).notNull()
    })

    await knex.schema.createTable("resource", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
      table.text("description")
    })

    await knex.schema.createTable("project_resource", (table) => {
      table.integer("project_id")
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.integer("resource_id")
        .references("id")
        .inTable("resource")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.primary(["project_id", "resource_id"])

    })

    await knex.schema.createTable("task", (table) => {
      table.increments("id")
      table.text("description").notNull()
      table.text("notes")
      table.boolean("completed").defaultTo(false).notNull()
      table.integer("project_id")
        .references("id")
        .inTable("project")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })
  
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("task")
  await knex.schema.dropTableIfExists("project_resource")
  await knex.schema.dropTableIfExists("resource")
  await knex.schema.dropTableIfExists("project")
}
