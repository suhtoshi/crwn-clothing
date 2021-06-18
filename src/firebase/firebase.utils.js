import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCxWGIop_WvaRUEqo2vkgB1ZiOd6hLzh_0",
    authDomain: "crwn-db-c317a.firebaseapp.com",
    projectId: "crwn-db-c317a",
    storageBucket: "crwn-db-c317a.appspot.com",
    messagingSenderId: "195547228930",
    appId: "1:195547228930:web:fe78221b78e9ebfc49701b",
    measurementId: "G-2XVGFWEKKX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
