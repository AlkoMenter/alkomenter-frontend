importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBuzhjQEgsaWWAYG9FcIAeCZY9YOQS4pEE",
  authDomain: "alkomentor-e6b1f.firebaseapp.com",
  projectId: "alkomentor-e6b1f",
  storageBucket: "alkomentor-e6b1f.appspot.com",
  messagingSenderId: "943072235592",
  appId: "1:943072235592:web:ecaf8601b72cb16afec87d"
});

const messaging = firebase.messaging();
