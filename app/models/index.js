/** importation de la configuration */
const { Sequelize } = require("sequelize/types");
const dbConfig = require("../config/db.config.js");
/** importation de la librairie sequelize */
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.acquire,
        acquire: dbConfig.pool.idle
    }
});

const db ={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// importation de l'entité tutorial
db.tutorial = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports =db;
