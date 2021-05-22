import { Box, Button, makeStyles } from '@material-ui/core';
import { Add, List } from '@material-ui/icons';
import React, { useState } from 'react'
import CustomStyles from '../styles/CustomStyles';
import { Fragment } from 'react';

import NewClientCard from './NewClientCard';

const ListPageActions = () => {

    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();

    const [newCardVisibility, setNewCardVisbility] = useState(false);


    const changeNewClientCardVisibility = (state) => {
        setNewCardVisbility(state);
    }

    // Guardar nuevo cliente en Firebase
    const saveNewClient = (data) => {
        console.log("data");
        console.log(data);
    }

    return (
        <Fragment>

            {/* Caja que envuelve el boton */}
            <Box
                component="span"
                m={1} //margin
                className={classes.buttonBox}
            >
                <Button><List />Filter</Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => changeNewClientCardVisibility(!newCardVisibility)}
                > <Add />Add client</Button >
            </Box>
            {
                (newCardVisibility) ? (
                    <NewClientCard saveNewClient={saveNewClient} changeNewClientCardVisibility={changeNewClientCardVisibility} newCardVisibility={newCardVisibility}/>
                ) : (<div />)
            }

        </Fragment>
    )
}

export default ListPageActions;
