import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid, makeStyles, Typography } from '@material-ui/core';
import { Drafts, Email, Home, Phone, WhatsApp } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import CustomStyles from '../styles/CustomStyles';
import ListPageActions from './ListPageActions';

import { FirestoreCollection } from 'react-firestore';
import ClientOptionsMenu from './ClientOptionsMenu';

const ListPage = () => {

    //const [clients, setClients] = useState([]);

    var randomMC = require('random-material-color');

    //Para usar el estilo, en este caso reutilizamos el fichero donde guardamos todo
    //despues, hay que guardar ese estilo en una constante para usarlo.
    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();


    // Para evitar la ejecucion en bucle del useEffect, necesitamos agregarle corchetes antes de los ultimos paréntesis
    /*
    useEffect(() => {
        getClientsInApi();
    }, []);

    const getClientsInApi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const clientes = await data.json();
        setClients(clientes);
    }*/

    const sendEmail = (email) => {
        window.open('mailto:' + email + '?subject=Subject&body=Body%20goes%20here');
    }

    const sendWhatsAppMessage = (phone, message) => {
        window.open('https://wa.me/' + phone);
    }

    const [sortFilter, setSortFilter] = useState("asc");

    const changeSortFilter = () => {
        // Cambiar los filtros e intentar jugar con ellos.
        //Para agregar más filtro solo hay que concatenarlos con ","
        if(sortFilter === "asc"){
            setSortFilter("desc");
        }else{
            setSortFilter("asc");
        }
        
    }
    
    //Cuando seleccionemos la opción de Actualizar Cliente (Update) cambiaremos el valor del estado
    const [clientUpdate, setClientUpdate] = useState({        
        name: "",
        subname: "",
        phone: "",
        email: "",
        address: "",
        currentTime: ""
    });

    return (
        <Fragment>
            {/* Componente sencillo para mostrar una caja para añadir usuarios */}
            <ListPageActions changeSortFilter={changeSortFilter} clientToUpdate={clientUpdate} setClientUpdate={setClientUpdate}/>
            <FirestoreCollection
                path="clients"
                sort={"currentTime:" + sortFilter}
                render={({ isLoading, data }) => {
                    return isLoading ? (
                        <Box component="span"
                            m={1} //margin
                            className={classes.circleProgressBox}
                        ><CircularProgress/></Box>
                    ) : (<div>
                        {
                            (Object.keys(data).length) ? (
                                data.map(aClient => (
                                    // Dentro de las cards, podemos definir el contenido con <CardContent/> y las acciones con
                                    //<CardActions/>
                                    <Card key={aClient.id} className={classes.cardStyles}>
                                        {/* Cabecera de la Tarjeta */}
                                        <CardHeader
                                            avatar={<Avatar aria-label="recipe" style={{ background: randomMC.getColor({ shades: ['200', '300'], text: aClient.phone }) }}>{aClient.name.charAt(0)}</Avatar>}
                                            title={<Typography className={classes.title}>{aClient.name}</Typography>}
                                            subheader={aClient.subname}
                                            className={classes.cardHeader}
                                            action={<ClientOptionsMenu client={aClient} setClientUpdate={setClientUpdate}/>}
                                        />
                                        {/* Contenido de la Tarjeta */}
                                        <CardContent className={classes.cardContent}>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item><Home /></Grid>
                                                <Grid item className={classes.extraInfo}>
                                                    {aClient.address}
                                                </Grid>
                                            </Grid>
                                            <Grid container direction="row" alignItems="center">
                                                <Grid item><Drafts/></Grid>
                                                <Grid item className={classes.extraInfo}>
                                                    {aClient.email}
                                                </Grid>
                                            </Grid>
                                            {
                                                (aClient.phone) ?
                                                    <Grid container direction="row" alignItems="center">
                                                        <Grid item><Phone /></Grid>
                                                        <Grid item className={classes.infoPhone}>
                                                            {aClient.phone}
                                                        </Grid>
                                                    </Grid> : <div />
                                            }
                                        </CardContent>
                                        {/* Acciones de la Tarjeta */}
                                        <CardActions className={classes.cardActions}>
                                            {
                                                (aClient.email) ? <Button size="small" color="primary" onClick={() => sendEmail(aClient.email)}><Email />Send-email</Button> : <div />
                                            }
                                            {
                                                (aClient.phone) ? <Button size="small" color="primary" onClick={() => sendWhatsAppMessage(aClient.phone)}><WhatsApp />Send-WA Message</Button> : <div />
                                            }
                                        </CardActions>
                                    </Card>
                                    
                                ))
                                            
                            ) : (<Typography>You still don't have clients! :(</Typography>)
                        }
                        
                    </div>)
                }}
            />
        </Fragment>
    )
}

export default ListPage
