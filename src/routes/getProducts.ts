import Product from "../models/Product";
import { Request, Response, Application } from "express";


const getProductsRoute = (app: Application) =>{
	app.get("/api/getProducts", async (req: Request, res: Response)=>{
		Product.findAll({order: ["id"]})
			.then((products: Product[])=>{
				const message = "la liste des produits a bien été récupérée";
				res.json({message, data: products});
			})
			.catch((error: Error)=> {
				const message = "la liste des produits n'a pas pu être récupérée pour le moment, réessayez dans quelques instants";
				res.status(500).json({message, data:error});
			});
	});

};

export default getProductsRoute;