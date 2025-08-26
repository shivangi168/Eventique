// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbM0WA-Fbxi-oOEKb8zRLFqyt3ldA7DIk",
  authDomain: "event-booking-system-1d7a6.firebaseapp.com",
  projectId: "event-booking-system-1d7a6",
  storageBucket: "event-booking-system-1d7a6.firebasestorage.app",
  messagingSenderId: "176814852986",
  appId: "1:176814852986:web:43abe04d6583797c9aa4c3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth to use in login/sign-up components
export const auth = getAuth(app);

export default app;
