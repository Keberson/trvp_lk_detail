import {Router} from "express";
import db from '../db/connection.js'
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.get('/getOrders', authMiddleware, async (req, res) => {
    const fullOrders = await db.getFullOrder();
    const result = [];

    for (const element of fullOrders) {
        const row = {
            id: element['order_row_id'],
            product: {
                id: element['product'],
                name: element['name']
            },
            number: element['number']
        };
        const founded = result.find((val) => val['id'] === element['order_info_id']);

        if (founded) {
            founded['rows'].push(row);
        } else {
            const order = {
                id: element['order_info_id'],
                customer: element['customer'],
                order_date: element['order_date'],
                rows: [row]
            };

            result.push(order);
        }
    }

    return res.status(200).json({result});
})

export default router;
