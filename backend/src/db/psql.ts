import pkg from 'pg';

export default class Psql {
    private _pool: pkg.Pool;

    constructor(settings) {
        this._pool = new pkg.Pool({
            user: settings.user,
            host: settings.host,
            database: settings.database,
            password: settings.password,
            port: settings.port,
            ssl: true
        });
    }

    async query(query: string): Promise<any[]> {
        return (await this._pool.query(query)).rows;
    }
}
