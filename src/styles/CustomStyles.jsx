import { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'

const CustomStyles = () => {

    const [useStyles, setUseStyles] = useState({
        link: { 
            color: '#ffffff', 
            paddingRight: 13, 
            textDecoration: 'none',
        },
        activeLink: { 
            color: '#00ffffff', 
            paddingRight: 13, 
            textDecoration: 'none',
        }
    });

    return (
        useStyles
    )

}

export default CustomStyles;
