import firebase from 'firebase'
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBoeEVWdKWKxTbjwuyLnLzZsg6fgD7yEeM",
    authDomain: "firechat-5fa8c.firebaseapp.com",
    projectId: "firechat-5fa8c",
    storageBucket: "firechat-5fa8c.appspot.com",
    messagingSenderId: "718769456429",
    appId: "1:718769456429:web:81cfd623406dc9b122bfa4",
    measurementId: "G-SSE99VCDYR"})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }