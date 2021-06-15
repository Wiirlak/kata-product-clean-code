import {Router} from 'express';
import ProductController from "./controllers/product.controller";

const productRouteur = Router();

productRouteur.get('/:productId', (req, res) => {
    try {
        const userId = Number(req.query.userId);
        const productInformation = ProductController.getProduct(Number(req.params.productId), userId);
        return res.json(productInformation);
    } catch(err) {
        if (err?.message) {
            return res.status(400).json({error: err.message});
        }
        return res.status(500).json({error: 'internal error'});
    }
})



export default productRouteur;