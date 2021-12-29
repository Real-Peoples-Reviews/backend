var express = require('expres');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(200).json({ api: 'up', timestamp: Date.now() });
});

module.exports = router;