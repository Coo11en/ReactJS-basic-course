
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB-w3gE24USGUfgwcoaNLkWVCQj-miTWi8",
    authDomain: "fir-firetapp.firebaseapp.com",
    projectId: "fir-firetapp",
    storageBucket: "fir-firetapp.appspot.com",
    messagingSenderId: "964214944353",
    appId: "1:964214944353:web:a9f11db5c439079238b020"
};

const firebasedb = firebase.initializeApp(firebaseConfig)
export const db = firebasedb.database().ref()
export const auth = firebase.auth()