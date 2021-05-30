import { Avatar, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Fragment } from 'react'


const HomePage = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(10),
          height: theme.spacing(10),
        },
      }));

    const classes = useStyles();

    return (
        <Fragment>
            <Card className={classes.cardStyles}>
                <CardHeader
                    avatar={<Avatar alt="React logo" src="../static/images/avatar/react2.png" />}
                    title={<Typography className={classes.title}>React Apirest</Typography>}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Avatar alt="React logo"className={classes.large} src="../static/images/avatar/react.svg"/>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default HomePage
