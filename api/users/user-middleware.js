const Users = require("./users-model");

// const validateUniqueUsername = async (req, res, next) => {
//     console.log("WHATEVER")
//     const { username } = req.body;

//     try {
//         const existingUsername = await Users.findUserByCredentials(username);

//         if (existingUsername.length > 0) {
//             res.status(400).json({ message: "This username is already taken" });
//         } else {
//             next();
//         }
//     } catch (err) {
//         next(err);
//     }
// };

const validateUniqueEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const existingEmail = await Users.findUserByCredentials(null, email);

        if (existingEmail.length > 0) {
            res.status(400).json({ message: "This email is already taken" });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

// const validateExistingUsername = async (req, res, next) => {
//     const { username } = req.body;
//     if (username) {
//         try {
//             const existingUsername = await Users.findUserByCredentials(
//                 username
//             );
//             if (existingUsername.length == 0) {
//                 res.status(400).json({
//                     message: "This username doesn't exist",
//                 });
//             } else {
//                 next();
//             }
//         } catch (err) {
//             next(err);
//         }
//     }
//     next();
// };

const validateExistingEmail = async (req, res, next) => {
    const { email } = req.body;

    try {
        const existingEmail = await Users.findUserByCredentials(null, email);
        if (existingEmail.length == 0) {
            res.status(400).json({ message: "This email doesn't exist" });
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    // validateUniqueUsername,
    validateUniqueEmail,
    // validateExistingUsername,
    validateExistingEmail,
};
