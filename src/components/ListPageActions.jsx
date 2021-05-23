import { Box, Button, makeStyles } from '@material-ui/core';
import { Add, List } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomStyles from '../styles/CustomStyles';
import { Fragment } from 'react';

import NewClientCard from './NewClientCard';
import firebase from "@firebase/app";

const ListPageActions = (props) => {

    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();

    const [newCardVisibility, setNewCardVisbility] = useState(false);

    const changeNewClientCardVisibility = (state) => {
        setNewCardVisbility(state);
    }

    // Guardar nuevo cliente en Firebase   
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
        <Fragment>

            {/* Caja que envuelve el boton */}
            <Box
                component="span"
                m={1} //margin
                className={classes.buttonBox}
            >
                <Button onClick={() => props.changeSortFilter()}><List />Filter</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => changeNewClientCardVisibility(!newCardVisibility)}
                > <Add />Add client</Button >
            </Box>
            {
                (newCardVisibility || (props.clientToUpdate.id != null)) ? (
                    <NewClientCard
                        addClientFirestore={addClientFirestore}
                        changeNewClientCardVisibility={changeNewClientCardVisibility}
                        newCardVisibility={newCardVisibility} 
                        clientToUpdate={props.clientToUpdate}
                        setClientUpdate={props.setClientUpdate}
                    />
                ) : (<div />)
            }

        </Fragment>
    )
}

export default ListPageActions;
