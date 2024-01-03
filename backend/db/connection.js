import Psql from './psql.js';
import jsonFile from 'jsonfile';

class Connection {
    constructor(config) {
        this._settings = jsonFile.readFileSync(config);
        this._connection = new Psql(this._settings);
    }

    async getUserInfo(login) {
        const query = `
            SELECT * 
            FROM users
            WHERE login = '${login}'
        `
        const res = await this._connection.query(query);

        return res.rows;
    }

    async getAllOrdersInfo() {
        const query = `
            SELECT * 
            FROM order_info
        `
        const res = await this._connection.query(query);

        return res.rows;
    }

    async getOrderRows(order_id) {
        const query = `
            SELECT id, product, "number"
            FROM order_row
            WHERE "order" = '${order_id}'
        `
        const res = await this._connection.query(query);

        return res.rows;
    }

    async getProduct(product_id) {
        const query = `
            SELECT *
            FROM products
            WHERE id = ${product_id}
        `

        const res = await this._connection.query(query)

        return res.rows;
    }

    async getFullOrder() {
        const query = `
            select 
            order_info.id as order_info_id, order_info.customer, order_info.order_date, 
            order_row.id as order_row_id, order_row.product as product_id, order_row."number", products.name
            from order_info
            join order_row on order_info.id = order_row."order"
            join products on products.id = order_row.product 
        `
        const res = await this._connection.query(query);

        return res.rows;
    }
}

export default new Connection('config.json');
