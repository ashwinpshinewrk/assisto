// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type PocketBase from "pocketbase";
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: PocketBase;
			user: {
				name: string;
				role: string;
				id : string
			} | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
