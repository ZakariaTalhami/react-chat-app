// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getToken,
  getMessaging,
  onMessage,
} from "firebase/messaging";
import { IMessage } from "../models/chat/message";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: "253250997070",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const VAPID = process.env.REACT_APP_VAPID;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

getToken(messaging, { vapidKey: VAPID })
  .then((token) => console.log(token))
  .catch((err) => console.log(err));

export const listenForMessages = (onNewMessage: (message: IMessage) => void) => {  
  onMessage(messaging, (payload) => {
    // TODO: Create a interface for notification data structure
    const messageData = payload.data;
    onNewMessage({
      sender: {
        name: messageData?.senderName ?? ""
      },
      body: messageData?.body ?? "",
      timestamp: parseInt(messageData?.timestamp ?? "") 
    })
  });
};