import firebase from 'firebase/compat/app'
import { getDatabase } from 'firebase/database'
import { uid } from 'uid'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = getDatabase(firebaseApp)

export const LoginWithEmail = async (email, password) => {
  const result = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)

  localStorage.setItem('BlueBridge_user_token', result.user.uid)

  return result
}

export const CreateUser = async (email, password) => {
  const result = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

  localStorage.setItem('BlueBridge_user_token', result.user.uid)
  localStorage.setItem('BlueBridge', JSON.stringify(result.user))

  return result
}

export default {
  googleLogin: async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    let result = await firebase.auth().signInWithPopup(provider)

    return result
  },
}
