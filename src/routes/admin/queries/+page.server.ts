import type { RecordModel } from "pocketbase";
import { linear } from "svelte/easing";

export async function load({ locals }) {
	type responseDataType = {
		name: string;
		service: string;
		car: string;
		date: string;
		time: string;
		isComplete: string;
	};

	const response: responseDataType[] = new Array();
	const data = await locals.pb
		.collection("appointment")
		.getFullList({ sort: "-created" });
	const users = await locals.pb.collection("users").getFullList();
	for (let i = 0; i < data.length; i++) {
        data[i].date = data[i].date.substring(0, 10);
		const id = data[i].field;
		for (let j = 0; j < users.length; j++) {
			console.log(users[i].id);
			if (users[i].id === id) {
				const responseData = {
					name: users[j].name,
					service: data[i].service,
					car: data[i].carType,
					date: data[i].date,
					time: data[i].time,
					isComplete: data[i].completed,
				};
				response.push(responseData);
			}
		}
		
	}
	return { response };
}