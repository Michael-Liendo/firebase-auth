// See https://kit.svelte.dev/docs/types#app

import type { User } from "firebase/auth";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			accessToken?: string | null;
			user?: User | null;
		}
		interface PageData {
			accessToken?: string | null;
			user?: User | null;
		}
		// interface Platform {}
	}
}

export {};
