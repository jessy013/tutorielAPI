module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "root",
    DB: "tutorielDB",
    dialect: "mysql",
    pool: {
        max: 5, // max de connections
        min: 0, // minimum de connections
        acquire: 30000, // délai avant expiration demande de connexion
        idle: 10000 // délai avant expiration connexion
    }
};