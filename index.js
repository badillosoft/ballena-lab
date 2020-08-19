const mongo = require("./mongo");
const util = require("./util");

module.exports = {
    mongo,
    ...mongo,
    util,
    ...util
};