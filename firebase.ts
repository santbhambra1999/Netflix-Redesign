// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYzf7bk524gIJWf6uWjOUYD9bHbUSSqX0",
  authDomain: "netflix-clone-cb38a.firebaseapp.com",
  projectId: "netflix-clone-cb38a",
  storageBucket: "netflix-clone-cb38a.appspot.com",
  messagingSenderId: "778786773914",
  appId: "1:778786773914:web:16ce03340a1886ef54b823"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
