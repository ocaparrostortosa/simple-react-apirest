import { Box, Button, Card, CardContent, CardHeader, makeStyles } from '@material-ui/core';
import { Add, List } from '@material-ui/icons';
import React, {useState} from 'react'
import CustomStyles from '../styles/CustomStyles';
import { Fragment } from 'react';
import {useForm} from 'react-hook-form';

const ListPageActions = () => {

    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();

    const [newCardVisibility, setNewCardVisbility] = useState(false);


    const changeNewClientCardVisibility = (state) => {
        setNewCardVisbility(state);
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
                    className={classes.addClientButton}
                    onClick={() => changeNewClientCardVisibility(!newCardVisibility)}
                > <Add />Add client</Button >
            </Box>
            {
                (newCardVisibility) ? (
                    <Card className={classes.cardStyles}>
                        <CardHeader title="Add new client" className={classes.newClientCardHeader} />
                        <CardContent className={classes.newClientCard}>
                            
                        </CardContent>
                    </Card>
                ) : (<div />)
            }

        </Fragment>
    )
}

export default ListPageActions;
