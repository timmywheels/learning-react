import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0bF7ulk5unDPgrLzVkioPFYCQNe13gAQ",
    authDomain: "catch-of-the-day-timwheeler.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-timwheeler.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;