const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../data/secrets");

const buildToken = (user) => {
    const payload = {
        user_id: user.user_id,
        username: user.username,
    };
    const options = {
        expiresIn: "1d",
    };

    return jwt.sign(payload, JWT_SECRET, options);
};

module.exports = { buildToken };
