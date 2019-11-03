import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyBhWrWg7RQVRs_GX46SOb-19N-5kVy4S60",
    authDomain: "titiktemuchat.firebaseapp.com",
    databaseURL: "https://titiktemuchat.firebaseio.com",
    projectId: "titiktemuchat",
    storageBucket: "titiktemuchat.appspot.com",
    messagingSenderId: "442274982910",
    appId: "1:442274982910:web:b0868b22040c94fb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;