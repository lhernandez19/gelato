import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './FirebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
