import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//Firebase imports
import firebase from "@firebase/app";
import "@firebase/firestore";
import { FirestoreProvider } from "react-firestore";

//Firebase
const config = {
  apiKey: "AIzaSyDNFSHQIH339aa9d-Yi1zDVVYa8oO9O7Ks",
  authDomain: "react-apirest.firebaseapp.com",
  databaseURL:
    "https://react-apirest-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-apirest",
  storageBucket: "react-apirest.appspot.com",
  messagingSenderId: "568933302180",
  appId: "1:568933302180:web:096cbe471a1e6619e90b31",
};
firebase.initializeApp(config);

ReactDOM.render(
  <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>,
  document.getElementById("root")
);
