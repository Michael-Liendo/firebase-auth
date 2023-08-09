import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBvJ5KLrYUv7AkgF4uHpmXoxqZpHsJJtHw",
	authDomain: "artful-zone-386518.firebaseapp.com",
	projectId: "artful-zone-386518",
	storageBucket: "artful-zone-386518.appspot.com",
	messagingSenderId: "683621025055",
	appId: "1:683621025055:web:5cc1f84cba414d1f4e1c2a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
