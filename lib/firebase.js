import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI1cwDz5d8SMoBGnSL8Wls5M9VT016C60",
  authDomain: "my-database-cagriexmp.firebaseapp.com",
  projectId: "my-database-cagriexmp",
  storageBucket: "my-database-cagriexmp.appspot.com",
  messagingSenderId: "433960271098",
  appId: "1:433960271098:web:1ca139610f7f6eeb8cdd43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
