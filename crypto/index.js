const crypto = require("crypto");

module.exports = {
    encrypt(text, password) {
        const cipher = crypto.createCipher("aes-256-cbc", password);
        let crypted = cipher.update(text, "utf8", "hex");
        crypted += cipher.final("hex");
        return crypted;
    },
    decrypt(text, password) {
        const decipher = crypto.createDecipher("aes-256-cbc", password);
        let decrypted = decipher.update(text, "hex", "utf8");
        decrypted += decipher.final("utf8");
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