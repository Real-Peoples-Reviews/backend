exports.up = function (knex) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments("review_id").primary();
        table
            .integer("user_id")
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        table.string("review");
        table.integer("rating");
        table.integer("helpful");
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("reviews");
};
