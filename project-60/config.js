import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDJCxuSgz_-PKU6Linp5L0AVV2L0vKTAj0',
  authDomain: 'school-attendance-87c9e.firebaseapp.com',
  databaseURL: 'https://school-attendance-87c9e-default-rtdb.firebaseio.com',
  projectId: 'school-attendance-87c9e',
  storageBucket: 'school-attendance-87c9e.appspot.com',
  messagingSenderId: '295796464794',
  appId: '1:295796464794:web:6a18490798e24ca5281323',
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.database();
