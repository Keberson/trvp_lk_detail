import pkg from 'pg';

export default class Psql {
    private _pool: pkg.Pool;

    constructor() {
        this._pool = new pkg.Pool({
            connectionString: process.env.POSTGRES_URL + "?sslmode=require",
        });
    }

    async query(query: string): Promise<any[]> {
        return (await this._pool.query(query)).rows;
    }
}
