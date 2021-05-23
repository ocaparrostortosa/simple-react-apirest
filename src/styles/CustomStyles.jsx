import { green} from "@material-ui/core/colors";

const CustomStyles = () => {



    const useStyles = {
        link: {
            color: '#ffffff',
            paddingRight: 13,
            textDecoration: 'none',
        },
        activeLink: {
            color: '#00ffffff',
            paddingRight: 13,
            textDecoration: 'none',
        },
        cardStyles: {
            minWidth: 275,
            margin: '1rem',
        },
        title: {
            fontSize: 15,
            fontWeight: 'Bold',
            fontFamily: 'Roboto'
        },
        subtitle: {
            fontSize: 12,
            color: '#4D4D4D'
        },
        extraInfo: {
            fontSize: 13,
            color: '#4D4D4D',
            paddingLeft: '0.1rem',
            margin: '0.1rem'
        },
        iconExtraInfo: {
            paddingLeft: '0rem',
            margin: '0rem',
            display: 'inline-flex',
            verticalAlign: 'top'
        },
        cardContent: {
            paddingTop: '0.1rem',
            paddingBottom: '0.1rem',
            margin: '0rem',
        },
        cardActions: {
            paddingTop: '0.1rem',
            margin: '0rem',
        },
        infoPhone: {
            fontSize: 13,
            paddingLeft: '0.2rem',
            margin: '0rem',
            fontStyle: 'oblique',
        },
        buttonBox: {
            justifyContent: "space-between",
            alignItems: "center",            
            display: "flex"
        },
        newClientCard: {            
            background: green[100],
            padding: "0.5px 16px 0.5px 16px"        
        },
        newClientCardHeader: {            
            background: green[100],
            color: "#ffffff",
            paddingBottom: 1
        },
        formTitle: {
            variant: "outlined",
            textShadow: '1px 1.5px rgba(150, 150, 150, .5)',
            fontSize: 24            
        },
        formSubtitle: {
            fontSize: 15
        },
        formTextField: {
            width: "80%",
            marginTop: 10
        },
        formPhone: {
            width: "85%",
            marginTop: 10,
            marginBottom: 0
        },
        errorMessage: {
            color: "#bf1650"
        },
        addClientButton: {
            background: "#008000",
            color: 'white',
            '&:hover': {
                background: "#87B676",
             },
             marginRight: 10
        },
        cancelClientButton:{
            background: "red",
            color: 'white',
            '&:hover': {
                background: "#C6625E",
             },
             marginLeft: 10
        },
        clientButtonBox: {
            justifyContent: "flex-end",
            alignItems: "center",            
            display: "flex",
            paddingTop: 20
        },
        circleProgressBox: {
            justifyContent: "center",
            alignItems: "center",            
            display: "flex",
            paddingTop: 20
        }
    };

    return (
        useStyles
    )

}

export default CustomStyles;
