import { PoolClient } from "pg";
import { connectionPool } from ".";
import { Event } from "../models/event";
import { eventDTO } from "../dtos/eventDTO";
import { BadCredentialsError } from "../errors/BadCredentialsError";
import { InternalServerError } from "../errors/InternalServerError";
import { eventDTOToEventConverter } from "../util/util-dto-to-event-converter";

export async function daoSubmitEvent(newEvent: eventDTO): Promise<Event> {
	let client: PoolClient; // our potential connection to db
	try {
		client = await connectionPool.connect();
		let result = await client.query(
			"INSERT INTO event (name, location, date, time) VALUES ($1,$2,$3,$4)",
			[newEvent.name, newEvent.location, newEvent.date, newEvent.time]
		);
		return eventDTOToEventConverter(newEvent);
	} catch (e) {
		console.log(e);

		throw new InternalServerError();
	} finally {
		client && client.release();
	}
}

export async function daoFindAllEvents(): Promise<Event[]> {
	let client: PoolClient;
	try {
		client = await connectionPool.connect();
		let results = await client.query("SELECT * FROM events");
		return results.rows.map(eventDTOToEventConverter);
	} catch (e) {
		throw new InternalServerError();
	} finally {
		client && client.release();
	}
}
