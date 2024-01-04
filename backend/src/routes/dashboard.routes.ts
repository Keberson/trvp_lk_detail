import {Router, Request, Response} from "express";
import db from '../db/connection.js';
import authMiddleware from "../middleware/auth.middleware.js";
import IOrderFull from "../types/IOrderFull.js";
import IOrderRowProduct from "../types/IOrderRowProduct.js";
import IOrderRowFull from "../types/IOrderRowFull.js";
import IOrderRaw from "../types/IOrderRaw.js";

const router: Router = Router();

router.get('/getOrders', authMiddleware, async (req: Request, res: Response): Promise<Response> => {
    const fullOrders: IOrderRowProduct[] = await db.getFullOrder();
    const result: IOrderFull[] = [];

    for (const element of fullOrders) {
        const row: IOrderRowFull = {
            id: element.order_row_id,
            product: {
                id: element.product_id,
                name: element.product_name
            },
            number: element.number
        };
        const founded: IOrderFull = result.find((val) => val.id === element.order_info_id);

        if (founded) {
            founded.rows.push(row);
        } else {
            const order = {
                id: element.order_info_id,
                customer: element.customer,
                order_date: element.order_date,
                rows: [row]
            };

            result.push(order);
        }
    }

    return res.status(200).json({result});
});

router.post('/createOrder', authMiddleware, async(req: Request, res: Response): Promise<Response> => {
    const data: IOrderRaw = req.body;
    const order_id = (await db.insertOrder({
        customer: data.customer,
        order_date: data.order_date
    }));

    console.log(order_id)

    for (const row of data.rows) {
        await db.insertRow(row, order_id);
    }

    return res.status(200).json({message: 'Successful created order'});
});

export default router;
