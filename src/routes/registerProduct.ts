import Product from "../models/Product";
import { Request, Response, Application } from "express";
import { ValidationError, UniqueConstraintError } from "sequelize";


const registerProductRoute = (app: Application) =>{
	app.post("/api/products", async (req: Request, res: Response)=>{
		const {title, price, description, seller, imageUrl, alt} = req.body;

        
		Product.create({
			title,
			price,
			description,
			seller,
			imageUrl,
			alt
		})
			.then(product =>{
				const message = `Le produit ${req.body.title} a bien été créé.`;
				res.json({message, data:product});
			})
			.catch((error: Error)=>{
				if (error instanceof ValidationError) {
					return res.status(400).json({ message: error.message, data: error });
				}
				if (error instanceof UniqueConstraintError) {
					return res.status(400).json({ message: error.message, data: error });
				}
				const message = "L'utilisateur n'a pas pu être ajouté. Réessayez dans quelques instants.";
				res.status(500).json({ message, data: error });
			});
	});
};

export default registerProductRoute;