import pkg from 'pg';

const {Pool} = pkg

export default class Psql {
    constructor(settings) {
        this._pool = new Pool({
            user: settings.user,
            host: settings.host,
            database: settings.database,
            password: settings.password,
            port: settings.port,
            ssl: true
        });
    }

    async query(query) {
        return await this._pool.query(query);
    }
}
