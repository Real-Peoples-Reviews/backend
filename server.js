require("dotenv").config();

const app = require("./api/app.js");

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
app.timeout = 60 * 10 * 1000;
