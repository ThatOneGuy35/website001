import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD7SfXp1gz1TE1BYadz587uyRuS32Me4gQ",
    authDomain: "bakers-b4bb3.firebaseapp.com",
    projectId: "bakers-b4bb3",
    storageBucket: "bakers-b4bb3.appspot.com",
    messagingSenderId: "714585271437",
    appId: "1:714585271437:web:8e5f2aeadcbc90ee5b46c4"
}

firebase.initializeApp(firebaseConfig)

//utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// db collection refferences
const vehicles = db.collection('vehicles')
const users = db.collection('users')

//export utils / refs

export {
    db,
    auth,
    vehicles,
    users,
    currentUser
}