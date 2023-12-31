import express from "express";
import morgan from "morgan";
import cors from "cors";
import getProductsRoute from "../routes/getProducts";
import registerProductRoute from "../routes/registerProduct";
/*
import registerUserRoute from "../routes/registerUser";
import editUserRoute from "../routes/editUser";
import deleteUserRoute from "../routes/deleteUser";
import loginRoute from "../routes/login";
import findAllUsersRoute from "../routes/findAllUsers";
import findUserRoute from "../routes/findUser";
*/


/**
 * Creates and configures an Express server.
 */
const createServer = () => {
	const app = express();

	app
		.use(morgan("dev")) //middleware helping dev to know the exact endpoint that has been called
		.use(cors())
		.use(express.json());

	/**
     * Attach routes to the Express app.
     */
	getProductsRoute(app);
	registerProductRoute(app);
	/*registerUserRoute(app);
	editUserRoute(app);
	deleteUserRoute(app);
	loginRoute(app);
	findAllUsersRoute(app);
	findUserRoute(app);*/

	return app;
};

export default createServer;