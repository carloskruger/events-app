import { eventDTO } from "../dtos/eventDTO";
import { Event } from "../models/Event";

export function eventDTOToEventConverter(eventDTO: eventDTO): Event {
	return new Event(
		eventDTO.event_id,
		eventDTO.name,
		eventDTO.location,
		eventDTO.date,
		eventDTO.time
	);
}
