module.exports = {
    PORT: 8080,
    MONGO_URL: 'mongodb://mongo:27017',
    MONGO_CONNECTION_OPTIONS: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        auth: {
            user: 'root',
            password: 'password'
        }
    },
    DB_NAME: 'boars-db'
}