import React  from "react";
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB2nAld9umyImv8SQt5kJxRMIiUcbLWmuE",
  authDomain: "eleqtus-dd133.firebaseapp.com",
  projectId: "eleqtus-dd133",
  storageBucket: "eleqtus-dd133.appspot.com",
  messagingSenderId: "209389905137",
  appId: "1:209389905137:web:cb90ebf929964466173550",
  measurementId: "G-GPBK2FCGGT"
})

function Contact(){
    return (
        <div>
            Contact <button> Go somewhere</button>
        </div>
    );
};

export default Contact;