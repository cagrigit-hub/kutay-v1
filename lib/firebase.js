import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxxxxxxxxxxxxxxx",
  authDomain: "xxxxxx",
  projectId: "xxxxxxxxxp",
  storageBucket: "xxxxxxxx",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxxxxx"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
