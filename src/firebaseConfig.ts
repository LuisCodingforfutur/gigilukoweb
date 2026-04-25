import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDE6cLuy6ZqI4PV3jv5DOBL5E8UFvu2Jvo",
  authDomain: "gigiluko.firebaseapp.com",
  projectId: "gigiluko",
  storageBucket: "gigiluko.appspot.com",
  messagingSenderId: "DEINE_SENDER_ID",
  appId: "DEINE_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
