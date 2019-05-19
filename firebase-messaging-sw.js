	// Initialize Firebase
    var config = {
        apiKey: "AIzaSyAM89g5Fu7aQjIkLpb0K-eTj_aDRMNsp_g",
        authDomain: "healthcare-database.firebaseapp.com",
        databaseURL: "https://healthcare-database.firebaseio.com",
        projectId: "healthcare-database",
        storageBucket: "healthcare-database.appspot.com",
        messagingSenderId: "148788781258"
    };
    firebase.initializeApp(config);



  // Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'YOUR-SENDER-ID'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

https://fcm.googleapis.com//v1/projects/healthcare-database/messages:send
Content-Type: application/json
Authorization: bearer <YOUR-ACCESS-TOKEN>

{
  "message": {
    "token": "eEz-Q2sG8nQ:APA91bHJQRT0JJ..."
    "notification": {
      "title": "Background Message Title",
      "body": "Background message body"
    },
    "webpush": {
      "fcm_options": {
        "link": "https://dummypage.com"
      }
    }
  }
}