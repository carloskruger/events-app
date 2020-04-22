export class eventDTO {
	event_id: number;
	name: string;
	location: string;
	date: number;
	time: number;

	constructor(
		event_id: number,
		name: string,
		location: string,
		date: number,
		time: number
	) {
		this.event_id = event_id;
		this.name = name;
		this.location = location;
		this.date = date;
		this.time = time;
	}
}
