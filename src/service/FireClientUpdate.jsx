import React from 'react';
import firebase from "@firebase/app";
import { Button } from '@material-ui/core';

const FireClientAdd = (props) => {

    var firestoreRef = firebase.firestore().collection("/stories");

    const addClientFirestore = (data) => {
        firestoreRef.add(data).then(function (docRef) {
            console.log("Client updated with ID: ", docRef.id);
        })
            .catch(function (error) {
                console.error("Error updating Client: ", error);
            });;

    }

    return (
        <Button color="primary" onClick={() => addClientFirestore({ id: props.clientId, title: "new title", authorName: "new author" })}>Add client</Button>
    )
}

export default FireClientAdd;
