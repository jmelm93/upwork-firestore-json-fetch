import { useEffect, useState, useRef } from "react"
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
import fire from 'firebase'


let config = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.firebaseapp.com",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    app.analytics()

    /* Helper */

    this.serverValue = app.database.ServerValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.database();
    this.write = app.firestore();

    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    this.facebookProvider = new app.auth.FacebookAuthProvider();
    this.twitterProvider = new app.auth.TwitterAuthProvider();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithGoogle = () =>
    this.auth.signInWithPopup(this.googleProvider);


  getApi = () => this.auth

  getList = () => {

  }

  doSignInWithFacebook = () =>
    this.auth.signInWithPopup(this.facebookProvider);

  doSignInWithTwitter = () =>
    this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  // *** Message API ***

  message = uid => this.db.ref(`messages/${uid}`);

  messages = () => this.db.ref('messages');


  getTools = ({collectionId, docId}) => {
    const doc = this.write.collection(collectionId).doc(docId)
    let results = []
    doc.onSnapshot(documentSnapshot  => {
      // console.log(`Received doc snapshot: ${documentSnapshot.data()}`);
      const id = documentSnapshot.id
      const data = documentSnapshot.data()
      results.push({...data, id})
      // return snapshot.data()
      });
    return results
    
  }

  // *** Notifications API ***
  setNotification = (data) => {
    console.log('notification', data)
    return this.write.collection('notifications').add({ 
      uid :data.uid,
      report_name: data.report_name,
      tool: data.tool,
      createdAt: new Date().toString(),
      status: true,
      miscData: data.miscData
    });
  }

  getReports = uid => this.write.collection('notifications').where('uid', '==', uid).get()

  getNotifications = uid => this.write.collection('notifications').where('uid', '==', uid).where('status', '==', true).get()

  updateNotification = id => this.write.collection('notifications').doc(id).update({
    status: false
  })
}

export default Firebase;
