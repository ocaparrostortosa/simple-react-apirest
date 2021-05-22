import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';
import { Email, Home, Phone, WhatsApp } from '@material-ui/icons';
import React, { Fragment, useEffect, useState} from 'react';
import CustomStyles from '../styles/CustomStyles';
import ListPageActions from './ListPageActions';

const ListPage = () => {

    const [clients, setClients] = useState([]);

    var randomMC = require('random-material-color');

    //Para usar el estilo, en este caso reutilizamos el fichero donde guardamos todo
    //despues, hay que guardar ese estilo en una constante para usarlo.
    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();


    // Para evitar la ejecucion en bucle del useEffect, necesitamos agregarle corchetes antes de los ultimos paréntesis
    useEffect(() => {
        getClientsInApi();
    }, []);

    const getClientsInApi = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const clientes = await data.json();
        setClients(clientes);
    }

    const sendEmail = (email) => {
        window.open('mailto:' + email + '?subject=Subject&body=Body%20goes%20here');
    }

    const sendWhatsAppMessage = (phone, message) => {
        window.open('https://wa.me/' + phone + '?text=' + message);
    }

    return (
        <Fragment>
            {/* Componente sencillo para mostrar una caja para añadir usuarios */}
            <ListPageActions/>
            {
                clients.map(aClient => (
                    // Dentro de las cards, podemos definir el contenido con <CardContent/> y las acciones con
                    //<CardActions/>
                    <Card key={aClient.id} className={classes.cardStyles}>
                        {/* Cabecera de la Tarjeta */}
                        <CardHeader
                            avatar={<Avatar aria-label="recipe" style={{ background: randomMC.getColor({ shades: ['200', '300'],  text: aClient.phone }) }}>{aClient.name.charAt(0)}</Avatar>}
                            title={<Typography className={classes.title}>{aClient.name}</Typography>}
                            subheader={aClient.username}
                            className={classes.cardHeader}
                        />
                        {/* Contenido de la Tarjeta */}
                        <CardContent className={classes.cardContent}>                            
                            <Grid container direction="row" alignItems="center">
                                <Grid item><Home /></Grid>
                                <Grid item className={classes.extraInfo}>
                                    {aClient.address.street}, {aClient.address.city} (ZIP: {aClient.address.zipcode})
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item><Phone /></Grid>
                                <Grid item className={classes.infoPhone}>
                                    {aClient.phone}
                                </Grid>
                            </Grid>
                        </CardContent>
                        {/* Acciones de la Tarjeta */}
                        <CardActions className={classes.cardActions}>
                            {
                                (aClient.email) ? <Button size="small" color="primary" onClick={() => sendEmail(aClient.email)}><Email/>Send-email</Button> : <div/>
                            }        
                            {
                                (aClient.phone) ? <Button size="small" color="primary" onClick={() => sendWhatsAppMessage(aClient.phone)}><WhatsApp/>Send-WA Message</Button> : <div/>
                            } 
                        </CardActions>
                    </Card>
                ))
            }
        </Fragment>
    )
}

export default ListPage
