import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/db';

var firebaseConfig = {
    apiKey: "AIzaSyAphesaZZCZeSF53hZ3pyZUTPhgCQqJqUY",
    authDomain: "react-bill-tracker.firebaseapp.com",
    databaseURL: "https://react-bill-tracker.firebaseio.com",
    projectId: "react-bill-tracker",
    storageBucket: "react-bill-tracker.appspot.com",
    messagingSenderId: "598254887273",
    appId: "1:598254887273:web:cd9d880d8b6b5b49"
};

app.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.database();
