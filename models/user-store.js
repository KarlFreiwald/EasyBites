const dataStore = require('./data-store.js');
const logger = require('../utils/logger.js');

const userStore = {
    async addUser(user) {
        logger.info(`Create user ${user.email}`);

        try {
            await dataStore.query(
                'INSERT INTO eb_user (email, password) VALUES($1, $2)',
                [user.email, user.password],
                'Error registering user',
                true
            );

            return true;
        } catch (e) {
            return false;
        }
    },
    async authenticateUser(email, password) {
        logger.info(`Authenticate user ${email}`)
        const dbRes = await dataStore.query(
            'SELECT * FROM eb_user WHERE email=$1 AND password=$2',
            [email, password],
            'error finding user from email and password',
        );

        return dbRes.rows !== undefined && dbRes.rows.length > 0 ? email : undefined;
    },
};

module.exports = userStore;