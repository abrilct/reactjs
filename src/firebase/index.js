import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp ({
    apiKey: "AIzaSyDGbKmD26FSqMbZ1V53MPB505vYZUgE4bQ",
    authDomain: "efectotequila-ecommerce.firebaseapp.com",
    projectId: "efectotequila-ecommerce",
    storageBucket: "efectotequila-ecommerce.appspot.com",
    messagingSenderId: "765193075654",
    appId: "1:765193075654:web:2c98c2f5428205eaf250c7",
});

export const getFirebase = () => {
    return app;
};

export const getFirestore = () => {
    return firebase.firestore(app)
};