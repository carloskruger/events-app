import * as express from "express";
import * as bodyparser from "body-parser";
import { eventRouter } from "./routers/event-router";

const app = express();

app.use("/", bodyparser.json());

app.use("/", (req, res) => {
	res.send("Hello World");
});

app.use("/events", eventRouter);

app.listen(2020, () => {
	console.log("app has started on port 2020");
});
