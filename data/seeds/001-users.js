const data = [
    { username: "test", password: "pass123", email: "test@test.com" },
];

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(() => {
            return knex("users").insert(data);
        });
};
