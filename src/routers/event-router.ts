import * as express from "express";
export const eventRouter = express.Router();

import * as bodyparser from "body-parser";
import { Event } from "../models/Event";

import { findAllEvents, submitEvent } from "../services/event-service";
import { eventDTO } from "../dtos/eventDTO";

eventRouter.get("", async (req, res) => {
	let events: Event[] = await findAllEvents();
	res.json(events);
});

eventRouter.post("", async (req, res) => {
	let { event_id, name, location, date, time } = req.body;
	if (name && location && date && time) {
		let newEvent = await submitEvent(
			new eventDTO(event_id, name, location, date, time)
		);

		res.sendStatus(201);
	} else {
		console.log(req.body);
		res.status(400).send("Please include all event fields");
	}
});
