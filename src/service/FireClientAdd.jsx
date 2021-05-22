import React from 'react';
import firebase from "@firebase/app";

const FireClientAdd = () => {

    var firestoreRef = firebase.firestore().collection("/clients");
    
    const addClientFirestore = (data) => {        
        firestoreRef.add(data).then(function (docRef) {
            console.log("Client added with ID: ", docRef.id);
        })
            .catch(function (error) {
                console.error("Error adding Client: ", error);
            });;
        
    }

    return (
        <div></div>
    )
}

export default FireClientAdd;
