exports.up = function (knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("user_id").primary();
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("password").notNullable();
        table.string("email").notNullable().unique();
        table.string("phone_number").notNullable().unique();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
};
