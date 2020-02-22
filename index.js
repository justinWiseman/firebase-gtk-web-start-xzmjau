// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import * as firebaseAnalytics from "firebase/analytics"
// <script src="https://www.gstatic.com/firebasejs/7.9.1/firebase-analytics.js"></script>


// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

var rsvpListener = null;
var guestbookListener = null;

// Add Firebase project configuration object here
var firebaseConfig = {
    apiKey: "AIzaSyBB4VuGEcOxgdyYtUxfwilQzZ3iIhSTyTQ",
    authDomain: "fir-webcodelab-d659a.firebaseapp.com",
    databaseURL: "https://fir-webcodelab-d659a.firebaseio.com",
    projectId: "fir-webcodelab-d659a",
    storageBucket: "fir-webcodelab-d659a.appspot.com",
    messagingSenderId: "593509287760",
    appId: "1:593509287760:web:1582d5299aa05ebe3c4e55",
    measurementId: "G-H3JHPCYLK0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};

// ...
// Initialize the FirebaseUI widget using Firebase
const ui = new firebaseui.auth.AuthUI(firebase.auth());

startRsvpButton.addEventListener("click",
 () => {
      ui.start("#firebaseui-auth-container", uiConfig);
});