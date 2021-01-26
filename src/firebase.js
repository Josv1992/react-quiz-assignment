import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5kmnilwOi7ByKWT8kT5JUSymnNYbmuJo",
    authDomain: "react-quiz-e7b72.firebaseapp.com",
    databaseURL: "https://react-quiz-e7b72-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "react-quiz-e7b72",
    storageBucket: "react-quiz-e7b72.appspot.com",
    messagingSenderId: "712336991425",
    appId: "1:712336991425:web:0b39712c0c642682be6040"
};

firebase.initializeApp(firebaseConfig);


export default firebase