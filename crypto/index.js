const crypto = require("crypto");

module.exports = {
    encrypt(text, password, encode = "utf-8") {
        const cipher = crypto.createCipher("aes-256-cbc", password);
        let crypted = cipher.update(text, encode, "hex");
        crypted += cipher.final("hex");
        return crypted;
    },
    decrypt(text, password, encode = "utf-8") {
        const decipher = crypto.createDecipher("aes-256-cbc", password);
        let decrypted = decipher.update(text, "hex", encode);
        decrypted += decipher.final(encode);
        return decrypted;
    },
    encryptBinary(text, password) {
        const cipher = crypto.createCipher("aes-256-cbc", password);
        let crypted = cipher.update(text, "binary", "hex");
        crypted += cipher.final("hex");
        return crypted;
    },
    decryptBinary(text, password) {
        const decipher = crypto.createDecipher("aes-256-cbc", password);
        let decrypted = decipher.update(text, "hex", "binary");
        decrypted += decipher.final("binary");
        return decrypted;
    },
};