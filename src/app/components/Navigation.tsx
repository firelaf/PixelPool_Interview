import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import logo from '../../images/PP-logo.png';
import { DrawerComponent } from './Drawer';
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from '@mui/material';

const useStyles = makeStyles(() => createStyles({

    toolbar: {
        justifyContent: 'space-between',
        background: '#ffffff'
    },

    logo: {
        flexGrow: 'initial',
        cursor: 'pointer',
        maxHeight: '50px',
        paddingTop: '3px',
        width: 'auto',
        imageRendering: 'crisp-edges',
    },

}));

export const Navigation: React.FunctionComponent = () => {

    const classes = useStyles();

    return (
        <AppBar position='sticky'>
            <CssBaseline />
            <Toolbar className={classes.toolbar}>
                <Link to="/" >
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                <DrawerComponent />
            </Toolbar>
        </AppBar >
    );
}