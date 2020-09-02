module.exports = {
    searchTextQuery(field, text) {
        const normalize = (
            (text || "").toLowerCase()
                .split(/[\s\n]+/)
                .join("|")
                .replace(/á|ä|à|â/g, "a")
                .replace(/é|ë|è|è/g, "e")
                .replace(/í|ï|ì|î/g, "i")
                .replace(/ó|ö|ò|ô/g, "o")
                .replace(/ú|ü|ù|û/g, "u")
        );

        const re = new RegExp(normalize, "i");

        return {
            [field]: { $regex: re }
        };
    },
    orQuery(...queries) {
        return {
            $or: queries
        };
    },
    sortFrom(format = null) {
        if (typeof format === "string") {
            sort = (
                format
                    .replace(/asc[^\s]*/g, "1")
                    .replace(/desc[^\s]*/g, "-1")
                    .split(/\s*[\s\+]\s*/)
                    .map(part => part.split(/\s*:\s*/))
            );
        }

        return format;
    },
};