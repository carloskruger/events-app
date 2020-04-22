import { Pool } from "pg";
const dotenv = require("dotenv");
dotenv.config();

export const connectionPool: Pool = new Pool({
	host: process.env.HOST,
	database: process.env.DATABASE,
	user: process.env.PG_USER,
	password: process.env.PASSWORD,
	port: 5432,
	max: 5,
});
