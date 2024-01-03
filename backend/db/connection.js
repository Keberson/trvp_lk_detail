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
}

export default new Connection('config.json');
