import { Sequelize } from "sequelize-typescript";
import Product from "../models/Product";


/**
 * Sequelize instance used to connect to the database.
 */
const sequelize = new Sequelize({
	logging: console.log,
	dialect: "postgres",
	host: "localhost",
	username: "postgres",
	password: " ",
	database: "DBProduct"
});

/**
 * Initializes the database by synchronizing models and populating with mock user data.
 */
async function initDb() {
	await sequelize.sync(/*{ force: true }*/); 
	//force: true n'est pas un comportement appliqué car l'alter est par défaut à false ici

	sequelize.addModels([Product]);

	console.log("La base de données a bien été initialisée !");

}



export { sequelize, initDb };
