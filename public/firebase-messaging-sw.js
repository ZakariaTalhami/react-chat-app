importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyC7PuGqxMxh-Vof-8IGKV0IIMps83vBrvA",
  authDomain: "chatapp-36e53.firebaseapp.com",
  projectId: "chatapp-36e53",
  storageBucket: "chatapp-36e53.appspot.com",
  messagingSenderId: "253250997070",
  appId: "1:253250997070:web:d0df71d37f1feca64eec1f",
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});