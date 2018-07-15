import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp};

// This is a default export
export default base;