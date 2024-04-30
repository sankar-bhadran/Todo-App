// FIRE BASE IS INITIALIZED

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEYQWl38Jzjzr9oaZR8qFgNW85FwVliuA",
  authDomain: "temp-todo-1b5fa.firebaseapp.com",
  projectId: "temp-todo-1b5fa",
  storageBucket: "temp-todo-1b5fa.appspot.com",
  messagingSenderId: "129516139450",
  appId: "1:129516139450:web:4d712d039903963116e383",
  measurementId: "G-JV01DTZZ14",
};
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
