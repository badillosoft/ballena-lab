const fetch = require("node-fetch");
const { v4: uuid } = require("uuid");
const stripe = require("stripe");

module.exports = {
    stripe,
    fetch,
    uuid,
    moment(date) {
        const now = new Date(date || new Date());

        const utcDiff = process.env.UTC || "-5";

        const utc = new Date(date || new Date());
        utc.setHours(utc.getHours() + Number(utcDiff));

        return [
            utc.toISOString(),
            utc.toISOString().slice(0, 10),
            utc.toISOString().slice(11, 19),
            now.toISOString(),
            now.toISOString().slice(0, 10),
            now.toISOString().slice(11, 19),
        ];
    },
    async runApi(server, api, protocol = {}) {
        const url = `${server.protocol}://${server.host}:${server.port}/${api}`;

        const response = await fetch(url, {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(protocol)
        });

        if (!response.ok) {
            const error = await response.text();
            throw error.replace(/[\r\n]/g, "");
        }

        const { error, result } = await response.json();

        if (error) throw error.replace(/[\r\n]/g, "");

        return result;
    },
};