import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB21dTk_jdM7j1tVf4gq6ViTNc2x6t7pWM",
  authDomain: "netflix-clone-f1a9b.firebaseapp.com",
  projectId: "netflix-clone-f1a9b",
  storageBucket: "netflix-clone-f1a9b.appspot.com",
  messagingSenderId: "240260249621",
  appId: "1:240260249621:web:2086b44a049e5074f1b61c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth };
export default db;
