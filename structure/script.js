const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2nAld9umyImv8SQt5kJxRMIiUcbLWmuE",
  authDomain: "eleqtus-dd133.firebaseapp.com",
  databaseURL: "https://eleqtus-dd133-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eleqtus-dd133",
  storageBucket: "eleqtus-dd133.appspot.com",
  messagingSenderId: "209389905137",
  appId: "1:209389905137:web:cb90ebf929964466173550",
  measurementId: "G-GPBK2FCGGT",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const readData = () => {
  db.collection("1")
    .get()
    .then((data) => {
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
      document.getElementById("demo").append(data);
    });
};
