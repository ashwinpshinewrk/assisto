import PocketBase from "pocketbase";
import { POCKET_URL } from "$env/static/private";

/** @type {import('@sveltejs/kit').Handle} */

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase(POCKET_URL);

	const response = await resolve(event);
	return response;
}
