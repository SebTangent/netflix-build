import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0xU53CEfG_hwn_JejobcAdqAPmPGf2cQ",
    authDomain: "netflix-clone-project-be46c.firebaseapp.com",
    projectId: "netflix-clone-project-be46c",
    storageBucket: "netflix-clone-project-be46c.appspot.com",
    messagingSenderId: "562284130237",
    appId: "1:562284130237:web:acf54ffa447eb1b296ecd4",
    measurementId: "G-7YVFY8MFLL"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;