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
            username: user.username,
            password: user.password,
            email: user.email,
        })
        .returning("*");
};

module.exports = {
    findAllUsers,
    findUserByCredentials,
    insertUser,
};
