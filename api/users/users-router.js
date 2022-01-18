const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { buildToken } = require("../auth/token-builder");

const Users = require("./users-model");
const {
    validateUniqueEmail,
    validateExistingEmail,
} = require("./user-middleware");

// gets all users
router.get("/", async (req, res, next) => {
    try {
        const allUsers = await Users.findAllUsers();
        res.status(200).json(allUsers);
    } catch (err) {
        next(err);
    }
});

router.post(
    "/register",
    validateUniqueEmail,
    async (req, res, next) => {
        const user = req.body;
        const rounds = process.env.BCRYPT_ROUNDS || 8;
        const hash = bcrypt.hashSync(user.password, rounds);
        user.password = hash;

        try {
            await Users.insertUser(user);
            res.status(201).json({ message: "registration successful" });
        } catch (err) {
            next(err);
        }
    }
);

router.post(
    "/login",
    validateExistingEmail,
    async (req, res, next) => {
        const { username, password, email } = req.body;

        try {
            const user = await Users.findUserByCredentials(username, email);

            if (user && bcrypt.compareSync(password, user[0].password)) {
                const token = buildToken(user);
                res.status(200).json({
                    message: `Welcome back, ${user[0].username}`,
                    token,
                });
            }
        } catch (err) {
            next(err);
        }
    }
);

module.exports = router;
