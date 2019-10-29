module.exports = {
    PORT: 3300,
    MONGO_URL: 'mongodb://mongo:27017',
    MONGO_CONNECTION_OPTIONS: {
        useUnifiedTopology: true,
        auth: {
            user: 'root',
            password: 'password'
        }
    },
    DB_NAME: 'boars-db'
}