import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTT80CK-z54xZPRVwDZBLG5xo4t334DgY",
    authDomain: "jobs-hunter-2cde0.firebaseapp.com",
    projectId: "jobs-hunter-2cde0",
    storageBucket: "jobs-hunter-2cde0.appspot.com",
    messagingSenderId: "800365674239",
    appId: "1:800365674239:web:3f623b39fdb0e008f096ca"
  };
  let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth()


export { provider, auth }