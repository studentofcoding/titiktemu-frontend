import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// var firebaseConfig = {
//     apiKey: "AIzaSyBhWrWg7RQVRs_GX46SOb-19N-5kVy4S60",
//     authDomain: "titiktemuchat.firebaseapp.com",
//     databaseURL: "https://titiktemuchat.firebaseio.com",
//     projectId: "titiktemuchat",
//     storageBucket: "titiktemuchat.appspot.com",
//     messagingSenderId: "442274982910",
//     appId: "1:442274982910:web:b0868b22040c94fb"
// };

// // Your web app's Firebase configuration
// var firebaseConfig = ;

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD3Mp5UZgzmcZ_Ek4jIhbFoldxKe5_GIGg",
    authDomain: "titiktemu-e2193.firebaseapp.com",
    databaseURL: "https://titiktemu-e2193.firebaseio.com",
    projectId: "titiktemu-e2193",
    storageBucket: "titiktemu-e2193.appspot.com",
    messagingSenderId: "512588232348",
    appId: "1:512588232348:web:a215130ab373cb4b975f59",
    measurementId: "G-WHL25EZL4D"
});
// firebase.analytics();

export default firebase;