import React, { useState } from 'react';
import MuiPhoneNumber from "material-ui-phone-number";
import { Button, Card, CardContent, CardHeader, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import CustomStyles from '../styles/CustomStyles';
import { Close, Done } from '@material-ui/icons';

const NewClientCard = (props) => {

    const customStyle = makeStyles(CustomStyles());
    const classes = customStyle();

    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Submit para el nuevo cliente
    // Guardar nuevo cliente en Firebase    
    const onSubmit = (clientData) => {
        if (props.clientToUpdate.id != null) {
            //Poner el codigo para la actualización del cliente
        } else {
            const client = {
                name: clientData.name,
                subname: clientData.subname,
                phone: Phone,
                email: clientData.email,
                address: clientData.address,
                currentTime: currentTime()
            };
            //console.log(client);
            props.addClientFirestore(client);
        }
        props.changeNewClientCardVisibility(!props.newCardVisibility);
    }

    const [Phone, setPhone] = useState('');
    const phoneChange = (phoneNumber) => {
        if (phoneNumber) {
            setPhone(phoneNumber.replace(/ +/g, ""));
        }
    }

    function currentTime() {
        var currentDate = new Date();
        return checkNumberValue(currentDate.getDate()) + "" +
            checkNumberValue(currentDate.getMonth()) + "" +
            currentDate.getFullYear() + "" +
            checkNumberValue(currentDate.getHours()) + "" +
            checkNumberValue(currentDate.getMinutes()) + "" +
            checkNumberValue(currentDate.getSeconds()) + "";
    }

    function checkNumberValue(object) {
        var finalValue = "";
        if (object < 10) {
            finalValue = "0" + object;
        } else {
            finalValue = object;
        }
        return finalValue;
    }

    //Function to cancel action
    const cancelAction = () => {
        props.changeNewClientCardVisibility(!props.newCardVisibility);
        //Actualizamos el cliente para volver a inicializarlo
        props.setClientUpdate({
            name: "",
            subname: "",
            phone: "",
            email: "",
            address: "",
            currentTime: ""
        });
    }

    return (
        <Card className={classes.cardStyles}>
            <CardHeader title={<Typography className={classes.formTitle}>Add new client</Typography>} className={classes.newClientCardHeader} />
            <CardContent className={classes.newClientCard}>
                {/* Agregar useForm para el formulario de nuevo cliente */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid container item xs={6} direction="column">

                            {/* Client name */}
                            <TextField id="outline-primary" label="Name" color="primary" value={props.clientToUpdate.name}
                                type="text" className={classes.formTextField}
                                {...register("name", {
                                    required: true,
                                    minLength: { value: 4 }
                                })}
                            />
                            {errors.name && errors.name?.type === 'required' && <Typography className={classes.errorMessage}>This input is required</Typography>}
                            {errors.name && errors.name?.type === 'minLength' && <Typography className={classes.errorMessage}>This input must exceed 4 characters</Typography>}

                            {/* Client email */}
                            <TextField id="outline-primary" label="Email" color="primary" value={props.clientToUpdate.email}
                                type="email" className={classes.formTextField}
                                {...register("email", {
                                    required: true,
                                    pattern: { value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ }
                                })}
                            />
                            {errors.email && errors.email?.type === 'required' && <Typography className={classes.errorMessage}>This input is required</Typography>}
                            {errors.email && errors.email?.type === 'pattern' && <Typography className={classes.errorMessage}>Incorrect email format</Typography>}

                            {/* Client address */}
                            <TextField
                                id="outline-primary"
                                label="Address"
                                color="primary"
                                type="text"
                                value={props.clientToUpdate.address}
                                className={classes.formTextField}
                                {...register("address", {
                                    required: true,
                                    minLength: { value: 4 }
                                })}
                            />
                            {errors.address && errors.address?.type === 'required' && <Typography className={classes.errorMessage}>This input is required</Typography>}
                            {errors.address && errors.address?.type === 'minLength' && <Typography className={classes.errorMessage}>This input must exceed 4 characters</Typography>}
                        </Grid>
                        <Grid container item xs={6} direction="column">

                            {/* Client subname */}
                            <TextField
                                id="outline-primary"
                                label="Subname"
                                color="primary"
                                type="text"
                                value={props.clientToUpdate.subname}
                                className={classes.formTextField}
                                {...register("subname", {
                                    required: true,
                                    minLength: { value: 4 }
                                })}
                            />
                            {errors.subname && errors.subname?.type === 'required' && <Typography className={classes.errorMessage}>This input is required</Typography>}
                            {errors.subname && errors.subname?.type === 'minLength' && <Typography className={classes.errorMessage}>This input must exceed 4 characters</Typography>}

                            {/* Phone number */}
                            <MuiPhoneNumber
                                defaultCountry={'es'} className={classes.formPhone} value={props.clientToUpdate.phone}
                                id="outline-primary" label="Phone" onChange={phoneChange}
                            />
                            <Grid container item spacing={2} className={classes.clientButtonBox}>

                                <Button variant="contained"
                                    type="submit"
                                    className={classes.addClientButton}
                                ><Done />{(props.clientToUpdate.id != null) ? "Update" : "Add"}</Button>

                                <Button variant="contained"
                                    className={classes.cancelClientButton}
                                    onClick={() => cancelAction()}
                                ><Close /> Cancel</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}

export default NewClientCard
