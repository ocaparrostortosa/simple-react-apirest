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
            margin: '1rem'          
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
        }
    };

    return (
        useStyles
    )

}

export default CustomStyles;
