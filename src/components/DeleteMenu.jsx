import { IconButton, makeStyles, Menu, MenuItem, Typography } from '@material-ui/core'
import { Cancel, CheckCircle, Delete, MoreVert } from '@material-ui/icons';
import React, { useState } from 'react'
import { Fragment } from 'react';
import CustomStyles from '../styles/CustomStyles';

import firebase from "@firebase/app";

const DeleteMenu = (props) => {

    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();

    const [anchorEl, setAnchorEl] = useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setbMostramosItem(false);
    };

    const [bMostramosItem, setbMostramosItem] = useState(false);

    //Obtenemos el firestore para eliminar el cliente
    var db = firebase.firestore();

    const deleteClient = (clientId) => {
        //console.log(clientId);
        db.collection("clients").doc(clientId).delete().then(() => {
            console.log("Cliente eliminado correctamente");
        }).catch((error) => {
            console.log("Error eliminando cliente: ", error);
        })
    }

    return (
        <Fragment>
            <IconButton aria-label="settings" onClick={handleClick}><MoreVert /></IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => setbMostramosItem(!bMostramosItem)}><Delete className={classes.errorMessage} /><Typography className={classes.errorMessage}>Delete client</Typography></MenuItem>
                {
                    (bMostramosItem) ?
                        (
                            <MenuItem>
                                <IconButton aria-label="upload picture" onClick={() => deleteClient(props.clientId)} className={classes.addClientButton}><CheckCircle/></IconButton>
                                <IconButton aria-label="upload picture" onClick={handleClose} className={classes.cancelClientButton}><Cancel/></IconButton>
                            </MenuItem>
                        )
                        :
                        <div></div>
                }
            </Menu>
        </Fragment>
    )
}

export default DeleteMenu
