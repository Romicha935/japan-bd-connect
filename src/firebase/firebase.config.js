// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADkoULA_f60MgVnDJUG7MAfp4-ZqGnZL8",
  authDomain: "japan-bd-connect.firebaseapp.com",
  projectId: "japan-bd-connect",
  storageBucket: "japan-bd-connect.firebasestorage.app",
  messagingSenderId: "751436466483",
  appId: "1:751436466483:web:5887ae8a3a788fb8441646",
  measurementId: "G-NZMK2E1MX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
 export default app