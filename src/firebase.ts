
// import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyB3xbbq95ICezCQS6VJNjfOT2WYwaEWIDE",
//     authDomain: "chatwith-a55c7.firebaseapp.com",
//     projectId: "chatwith-a55c7",
//     storageBucket: "chatwith-a55c7.appspot.com",
//     messagingSenderId: "452160016754",
//     appId: "1:452160016754:web:ac25b51cf1a5d0d0d74deb",
//     measurementId: "G-K755GQ3FLY",

// };

// const app = initializeApp(firebaseConfig);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3an_Z1JLDqJUImGvWAfaqENm6N0dP75k",
  authDomain: "aipdf-30223.firebaseapp.com",
  projectId: "aipdf-30223",
  storageBucket: "aipdf-30223.appspot.com",
  messagingSenderId: "966565455509",
  appId: "1:966565455509:web:93c442fce0936c97f35d9c",
  measurementId: "G-XRH176J1RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage }
// const analytics = getAnalytics(app);