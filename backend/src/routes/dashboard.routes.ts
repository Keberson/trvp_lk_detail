import {Router, Request, Response} from "express";
import db from '../db/connection.js';
import authMiddleware from "../middleware/auth.middleware.js";
import IOrderFull from "../types/IOrderFull.js";
import IOrderRowProduct from "../types/IOrderRowProduct.js";
import IOrderRowFull from "../types/IOrderRowFull.js";
import IOrderRaw from "../types/IOrderRaw.js";
import IOrderInfo from "../types/IOrderInfo.js";
import IProduct from "../types/IProdcut.js";
import IOrderEdit from "../types/IOrderEdit.js";
import IRowsEdit from "../types/IRowsEdit.js";

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

router.get('/getProducts', async (req: Request, res: Response): Promise<Response> => {
    const result: IProduct[] = await db.getProducts();

    return res.status(200).json({result})
});

router.post('/createOrder', async (req: Request, res: Response): Promise<Response> => {
    const data: IOrderRaw = req.body;

    const order_id = (await db.insertOrder({
        customer: data.customer,
        order_date: data.order_date
    }));

    for (const row of data.rows) {
        await db.insertRow({
            ...row,
            order: order_id
        }, order_id);
    }

    return res.status(200).json({message: 'Successful created order'});
});

router.patch('/editOrder', async (req: Request, res: Response): Promise<Response> => {
    const data: IOrderEdit = req.body;
    const rows = await db.getRows(data.id);

    await db.editOrderInfo({
        id: data.id,
        customer: data.customer,
        order_date: data.order_date
    });

    for (const row of data.rows) {
        if ('id' in row) {
            await db.editRow(row);
        } else {
            await db.insertRow({
                ...row,
                order: data.id
            }, data.id);
        }
    }

    for (const row of rows) {
        if (data.rows.find((r) => r.id === row.id) === undefined) {
            await db.addProduct(Number(row.product), row.number);
            await db.deleteRow(row.id);
        }
    }

    return res.status(200).json({message: "Successful edited order"});
});

router.patch('/editRows', async (req: Request, res: Response): Promise<Response> => {
    const data: IRowsEdit[] = req.body;

    for (const row of data) {
        await db.editRowOrderID(row.rowID, row.toOrder);
    }

    return res.status(200).json({message: "Successful edited rows"});
});

router.delete('/deleteOrder/:id', async (req: Request, res: Response): Promise<Response> => {
    const order_id: string = req.params['id'];
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

router.post('/expiredOrders/:date', async (req: Request, res: Response): Promise<Response> => {
    const data: string = req.params['date'];

    await db.deleteExpiredOrders(data);

    return res.status(200).json({message: "Successful deleted orders"});
});

router.post('/simulate', async (req: Request, res: Response): Promise<Response> => {
    await db.addRandomProducts();

    return res.status(200).json({message: "Successful simulated"});
})

export default router;
