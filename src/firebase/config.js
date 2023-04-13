import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPl3HbFsFb9hDzXkR5KU88-3lIRAJiGYI",
    authDomain: "olx-clone-bf716.firebaseapp.com",
    projectId: "olx-clone-bf716",
    storageBucket: "olx-clone-bf716.appspot.com",
    messagingSenderId: "631746631342",
    appId: "1:631746631342:web:7bea83c451037b8e5ebf3f",
    measurementId: "G-3VNLP2HMHF"
  };

 export default firebase.initializeApp(firebaseConfig)