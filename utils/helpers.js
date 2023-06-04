const helpers = {
    get_gets(req, initDict) {
        const withGets = Object.assign({}, initDict);

        // Iterate through each GET variable
        for (const key in req.query) {
            if (Object.hasOwnProperty.call(req.query, key)) {
                const prefixedKey = `get_${key}`;
                withGets[prefixedKey] = req.query[key];
            }
        }

        return withGets;
    }
}

module.exports = helpers;