const mongo = require("./mongo");
const util = require("./util");
const stripe = require("stripe");
const { v4: uuid } = require("uuid");

const version = "v1.0.8";

module.exports = {
    version,
    mongo,
    ...mongo,
    util,
    ...util,
    stripe,
    uuid
};