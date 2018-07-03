import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyB-Ki-E1JGxUpnGmTdqPoSEmh7O6HGa3gQ',
    authDomain: 'ride-b400b.firebaseapp.com',
    databaseURL: 'https://ride-b400b.firebaseio.com',
    projectId: 'ride-b400b',
    storageBucket: 'ride-b400b.appspot.com',
    messagingSenderId: '251012460295',
};
firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

console.log(firebase.auth().currentUser);

export async function signIn() {
    try {
        const {user: {
            displayName: name,
            photoURL: photo,
        }} = await firebase.auth().signInWithPopup(provider);

        return {
            name,
            photo,
        };
    } catch (err) {
        console.error(err);
    }
}
