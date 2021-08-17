import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDqd0_AtZNlxJijbnUmXkG3rwbhTq61TWY",
    authDomain: "crwn-clothing-toha.firebaseapp.com",
    projectId: "crwn-clothing-toha",
    storageBucket: "crwn-clothing-toha.appspot.com",
    messagingSenderId: "281852023074",
    appId: "1:281852023074:web:ccae6ca35420e68ca7d57b",
    measurementId: "G-DSFQDSK4YY"
};

firebase.initializeApp(firebaseConfig)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

// provider.setCustomParameters({'prompt': 'select-account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase