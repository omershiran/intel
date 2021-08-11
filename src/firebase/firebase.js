// import * as firebase from 'firebase';
import firebase from 'firebase'
import firebaseConfig from './firebaseConfigDev'


const config = firebaseConfig
  
 
    

 
firebase.initializeApp(config);

const database = firebase.database();

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase,  database as default };
