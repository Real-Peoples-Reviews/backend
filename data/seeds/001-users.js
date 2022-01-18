const bcrypt = require("bcryptjs")
const data = [
    { first_name: "test", last_name: "test", password: bcrypt.hashSync("123", 8), email: "test@test.com", phone_number: "1234567890" },
];

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(() => {
            return knex("users").insert(data);
        });
};
