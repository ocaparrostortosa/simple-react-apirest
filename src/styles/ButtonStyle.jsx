import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const ButtonStyle = (props) => {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),      
      color: props.colorB
    },
  }));

  const ColorButton = useStyles(props);

  const changeColor = () => {
    props.handleClick(props.label);    
  }

  return (

    <Button
      className={ColorButton.button}      
      onClick={() => changeColor()}
      startIcon={props.icon}
    >{props.label}</Button>
  )
}

export default ButtonStyle;