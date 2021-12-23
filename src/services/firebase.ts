// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getToken, getMessaging, onMessage, MessagePayload } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7PuGqxMxh-Vof-8IGKV0IIMps83vBrvA",
  authDomain: "chatapp-36e53.firebaseapp.com",
  projectId: "chatapp-36e53",
  storageBucket: "chatapp-36e53.appspot.com",
  messagingSenderId: "253250997070",
  appId: "1:253250997070:web:d0df71d37f1feca64eec1f",
};

const VAPID =
  "BALRY8Olw-PVsdaHHKyHDPPWa6XbcGB-6fXi3Pn-lxZA5u4vb_VFVJ3tsqceSQMmLtdb-Uhvd5cL53-bAw5_5as";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

getToken(messaging, { vapidKey: VAPID })
  .then((token) => console.log(token))
  .catch((err) => console.log(err));

export const listenForMessages = () => {
  console.log("listenForMessages");

  onMessage(messaging, (payload) => {
    console.log(" received. ", payload);
    // ...
  });
};
