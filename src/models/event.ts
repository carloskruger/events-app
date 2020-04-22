export class Event {
	event_id: number; // primary key
	name: string; // foreign key -> User, not null
	location: string; // not null

	date: number; // not null
	time: number;

	constructor(
		event_id: number, // primary key
		name: string, // foreign key -> User, not null
		location: string, // not null

		date: number, // not null

		time: number // foreign key -> User
	) {
		this.event_id = event_id; // primary key
		this.name = name; // foreign key -> User, not null
		this.location = location; // not null
		this.date = date; // not null
		this.time = time; // not null
	}
}
