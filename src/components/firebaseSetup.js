import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCqUNHTllZIzzA6PkZaKdJDolDb0jf3guQ",
    authDomain: "issue-tracker-44a7d.firebaseapp.com",
    databaseURL: "https://issue-tracker-44a7d-default-rtdb.firebaseio.com",
    projectId: "issue-tracker-44a7d",
    storageBucket: "issue-tracker-44a7d.appspot.com",
    messagingSenderId: "662436287643",
    appId: "1:662436287643:web:f65aafb9c69533b2d5223e"
};

// Initialize Firebase
var fireStoreDB = firebase.initializeApp(firebaseConfig);

export default fireStoreDB.database().ref();
// export default fireStoreDB;