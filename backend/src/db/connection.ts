import Psql from './psql.js';
import IUser from "../types/IUser.js";
import IOrderInfo from "../types/IOrderInfo.js";
import IOrderRow from "../types/IOrderRow.js";
import IProduct from "../types/IProdcut.js";
import IOrderRowProduct from "../types/IOrderRowProduct.js";
import IOrderInfoRaw from "../types/IOrderInfoRaw.js";
import IOrderRowEdit from "../types/IOrderRowEdit.js";
import IOrderRowDB from "../types/IOrderRowDB.js";
import getRandomNumber from "../utils/random.js";

class Connection {
    private _connection: Psql;

    constructor() {
        this._connection = new Psql();
    }

    async getUserInfo(login: string): Promise<IUser[]> {
        const query: string = `
            SELECT * 
            FROM users
            WHERE login = '${login}'
        `

        return (await this._connection.query(query));
    }

    async getProducts(): Promise<IProduct[]> {
        const query: string = `
            SELECT *
            FROM products
            ORDER BY "name"
        `

        return (await this._connection.query(query));
    }

    async addProduct(product: number, value: number): Promise<void[]> {
        const query: string = `
            UPDATE products
            SET number=(SELECT number FROM products WHERE id=${product}) + ${value}
            WHERE id=${product};
        `

        return (await this._connection.query(query));
    }

    async getFullOrder(): Promise<IOrderRowProduct[]> {
        const query: string = `
            SELECT 
            order_info.id AS order_info_id, order_info.customer, order_info.order_date, 
            order_row.id AS order_row_id, order_row.product AS product_id, order_row."number", products.name AS product_name
            FROM order_info
            JOIN order_row ON order_info.id = order_row."order"
            JOIN products ON products.id = order_row.product 
            ORDER BY order_info_id
        `

        return (await this._connection.query(query));
    }

    async insertRow(row: IOrderRow, order_id: number): Promise<void[]> {
        const query: string = `
            INSERT INTO order_row
            (id, product, "number", "order")
            VALUES(gen_random_uuid(), ${row.product}, ${row.number}, '${order_id}');
        `

        return (await this._connection.query(query))
    }

    async getRows(order: number): Promise<IOrderRowDB[]> {
        const query: string = `
            SELECT * FROM order_row
            WHERE "order"='${order}'
        `;

        return (await this._connection.query(query));
    }

    async editRow(row: IOrderRowEdit): Promise<void[]> {
        const query: string = `
            UPDATE order_row
            SET product=${row.product}, "number"=${row.number}
            WHERE id='${row.id}';
        `

        return (await this._connection.query(query))
    }

    async editRowOrderID(row_id: string, order: number): Promise<void[]> {
        const query: string = `
            UPDATE order_row
            SET "order" = ${order}
            WHERE id='${row_id}';
        `

        return (await this._connection.query(query))
    }

    async deleteRow(row_id: string): Promise<void[]> {
        const query: string = `
            DELETE FROM order_row
            WHERE id='${row_id}'
        `;

        return (await this._connection.query(query));
    }

    async insertOrder(order: IOrderInfoRaw): Promise<number> {
        const query: string = `
            INSERT INTO order_info
            (customer, order_date)
            VALUES('${order.customer}', '${order.order_date}')
            RETURNING id
        `

        return (await this._connection.query(query))[0].id
    }

    async getOrder(order_id: string): Promise<IOrderInfo[]> {
        const query: string = `
            SELECT * FROM order_info
            WHERE id='${order_id}';
        `

        return (await this._connection.query(query))
    }

    async editOrderInfo(orderInfo: IOrderInfo): Promise<void[]> {
        const query: string = `
            UPDATE order_info
            SET customer='${orderInfo.customer}', order_date='${orderInfo.order_date}'
            WHERE id='${orderInfo.id}';
        `

        return (await this._connection.query(query))
    }

    async deleteOrder(order_id: string): Promise<void[]> {
        const query: string = `
            DELETE FROM order_info
            WHERE id='${order_id}';
        `

        return (await this._connection.query(query))
    }

    async deleteExpiredOrders(date?: string): Promise<void[]> {
        const query: string = `
            DELETE FROM order_info
            WHERE order_date<='${date ? date : 'NOW()'}';
        `

        return (await this._connection.query(query))
    }

    async addRandomProducts(): Promise<void[]> {
        const products = await this.getProducts();
        const queries: string[] = [];

        for (const product of products) {
            queries.push(`
                UPDATE products
                SET number=(SELECT number FROM products WHERE id=${product.id}) + ${getRandomNumber(1, 100)}
                WHERE id=${product.id};
            `)
        }

        const query: string = queries.join('');

        return (await this._connection.query(query));
    }
}

export default new Connection();
