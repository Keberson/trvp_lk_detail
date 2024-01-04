import {Router, Request, Response} from "express";
import db from '../db/connection.js';
import authMiddleware from "../middleware/auth.middleware.js";
import IOrderFull from "../types/IOrderFull.js";
import IOrderRowProduct from "../types/IOrderRowProduct.js";
import IOrderRowFull from "../types/IOrderRowFull.js";
import IOrderRaw from "../types/IOrderRaw.js";
import IOrderInfo from "../types/IOrderInfo.js";

const router: Router = Router();

router.use(authMiddleware);

router.get('/getOrders', async (req: Request, res: Response): Promise<Response> => {
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

router.post('/createOrder', async (req: Request, res: Response): Promise<Response> => {
    const data: IOrderRaw = req.body;
    const order_id = (await db.insertOrder({
        customer: data.customer,
        order_date: data.order_date
    }));

    for (const row of data.rows) {
        await db.insertRow(row, order_id);
    }

    return res.status(200).json({message: 'Successful created order'});
});

router.patch('/editOrder', async (req: Request, res: Response): Promise<Response> => {
    const data: IOrderFull = req.body;

    for (const row of data.rows) {
        await db.editRow(row);
    }

    return res.status(200).json({message: "Successful edited order"});
});

router.delete('/deleteOrder', async (req: Request, res: Response): Promise<Response> => {
    const order_id: string = req.body['order_id'];
    const got: IOrderInfo[] = await db.getOrder(order_id);

    if (got.length === 0) {
        return res.status(400).json({message: "Incorrect order id"});
    }

    await db.deleteOrder(order_id);

    const deleted: IOrderInfo[] = await db.getOrder(order_id);

    if (deleted.length !== 0) {
        return res.status(500).json({message: "Something went wrong"});
    }

    return res.status(200).json({message: "Successful deleted order"});
});

export default router;
