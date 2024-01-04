import Psql from './psql.js';
import jsonFile from 'jsonfile';
import IUser from "../types/IUser.js";
import IOrderInfo from "../types/IOrderInfo.js";
import IOrderRow from "../types/IOrderRow.js";
import IProduct from "../types/IProdcut.js";
import IOrderRowProduct from "../types/IOrderRowProduct.js";
import IOrderRowRaw from "../types/IOrderRowRaw.js";
import IOrderInfoRaw from "../types/IOrderInfoRaw.js";
import IOrderRowFull from "../types/IOrderRowFull.js";

class Connection {
    private readonly _settings: any;
    private _connection: Psql;

    constructor(config: string) {
        this._settings = jsonFile.readFileSync(config);
        this._connection = new Psql(this._settings);
    }

    async getUserInfo(login: string): Promise<IUser[]> {
        const query: string = `
            SELECT * 
            FROM users
            WHERE login = '${login}'
        `

        return (await this._connection.query(query));
    }

    async getAllOrdersInfo(): Promise<IOrderInfo[]> {
        const query: string = `
            SELECT * 
            FROM order_info
        `

        return (await this._connection.query(query));
    }

    async getOrderRows(order_id: string): Promise<IOrderRow[]> {
        const query: string = `
            SELECT id, product, "number"
            FROM order_row
            WHERE "order" = '${order_id}'
        `

        return (await this._connection.query(query));
    }

    async getProduct(product_id: number): Promise<IProduct[]> {
        const query: string = `
            SELECT *
            FROM products
            WHERE id = ${product_id}
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
        `

        return (await this._connection.query(query));
    }

    async insertOrder(order: IOrderInfoRaw): Promise<string> {
        const query: string = `
            INSERT INTO public.order_info
            (id, customer, order_date)
            VALUES(gen_random_uuid(), '${order.customer}', '${order.order_date}')
            RETURNING id
        `

        return (await this._connection.query(query))[0].id
    }

    async insertRow(row: IOrderRowRaw, order_id: string): Promise<void[]> {
        const query: string = `
            INSERT INTO order_row
            (id, product, "number", "order")
            VALUES(gen_random_uuid(), ${row.product.id}, ${row.number}, '${order_id}');
        `

        return (await this._connection.query(query))
    }

    async editRow(row: IOrderRowFull): Promise<void[]> {
        const query: string = `
            UPDATE order_row
            SET "number"=${row.number}
            WHERE id='${row.id}';
        `

        return (await this._connection.query(query))
    }
}

export default new Connection('config.json');
