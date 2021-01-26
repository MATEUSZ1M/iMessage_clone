import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCR_XfjeFT6wSZGCUvjMKzO7JCaK8nYqmY",
  authDomain: "imessage-clone-ecc7e.firebaseapp.com",
  projectId: "imessage-clone-ecc7e",
  storageBucket: "imessage-clone-ecc7e.appspot.com",
  messagingSenderId: "702616540852",
  appId: "1:702616540852:web:a2a7ee439fb2cf1649a9e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;

