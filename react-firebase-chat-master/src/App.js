import React, { useRef, useState } from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB2nAld9umyImv8SQt5kJxRMIiUcbLWmuE",
  authDomain: "eleqtus-dd133.firebaseapp.com",
  projectId: "eleqtus-dd133",
  storageBucket: "eleqtus-dd133.appspot.com",
  messagingSenderId: "209389905137",
  appId: "1:209389905137:web:cb90ebf929964466173550",
  measurementId: "G-GPBK2FCGGT",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>Chat</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignInG />}</section>
    </div>
  );
}

function SignInG() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-inG" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="type here" />

        <button type="submit" disabled={!formValue}>
          Send
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"} />
        <p>{text}</p>
      </div>
    </>
  );
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    alert("You have sent message great job buddy");
  });
});

//login email n password
firebase.auth().onAuthStateChanged(function (user) {
  var notLoggedIn = document.getElementById("not-logged-in");
  var loggedIn = document.getElementById("logged-in");
  if (user) {
    loggedIn.style.display = "block";
    loggedIn.style.position = "absolute";
    notLoggedIn.style.display = "none";
  } else {
    loggedIn.style.display = "none";
    notLoggedIn.style.display = "block";
    notLoggedIn.style.position = "absolute";
  }
});
function login(event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      console.log("Error signing in", error.message);
      alert(error.message);
    })
    .then(function (user) {
      if (user) {
        alert("velkom tilbage du er in");
      }
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      //sign out succesfuly
    })
    .catch(function (error) {
      //error
    });
}
export default App;
