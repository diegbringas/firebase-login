import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDS7yR_AYKTnwMZIA2d6s4qWun9IqzCJC0",
  authDomain: "fir-login-d57ab.firebaseapp.com",
  projectId: "fir-login-d57ab",
  storageBucket: "fir-login-d57ab.appspot.com",
  messagingSenderId: "349286396251",
  appId: "1:349286396251:web:a43c6c215848a760c2aa7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth};