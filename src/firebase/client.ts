import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_PRIVATE_KEY,
  authDomain: import.meta.env.FIREBASE_AUTH_URI,
  projectId: import.meta.env.FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_ID,
  appId: import.meta.env.FIREBASE_PRIVATE_KEY_ID,
};

export const app = initializeApp(firebaseConfig);