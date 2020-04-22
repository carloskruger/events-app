import { daoFindAllEvents, daoSubmitEvent } from "../repositories/event-dao";
import { Event } from "../models/Event";
import { eventDTO } from "../dtos/eventDTO";

export async function findAllEvents(): Promise<Event[]> {
	return await daoFindAllEvents();
}

export async function submitEvent(newEvent: eventDTO): Promise<Event> {
	return await daoSubmitEvent(newEvent);
}
