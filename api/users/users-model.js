const db = require("../../data/db-config");

const findAllUsers = () => {
    return db("users");
};

// for login endpoint. this checks for either username OR email, it doesn't need both.
const findUserByCredentials = (username, email) => {
    if (username) return db("users").where({ username });
    else if (email) return db("users").where({ email });
};

const insertUser = (user) => {
    return db("users")
        .insert({
            first_name: user.first_name,
            last_name: user.last_name,
            password: user.password,
            email: user.email,
            phone_number: user.phone_number,
        })
        .returning("*");
};

module.exports = {
    findAllUsers,
    findUserByCredentials,
    insertUser,
};
