import { Button, Card, CardActions, CardContent, CardHeader, Container, Grid, TextField, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import { createStyles, makeStyles } from '@mui/styles';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { auth } from '../../firebaseSetup';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainDiv: {
            height: '100vh',
            top: '50%',
            left: '50%',
            color: 'white',
            display: 'flex',
            paddingTop: '20px',
            overflow: 'hidden',
            maxWidth: '1000px',
        },
        primary: {
            main: '#212121',
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`
        },
        loginBtn: {
            marginTop: theme.spacing(2),
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: theme.spacing(10)
        }
    })
);


const Login = () => {

    const classes = useStyles();

    const user = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = async () => {
        try {
            await auth.createUserWithEmailAndPassword(
                username,
                password
            );
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(
                username,
                password
            );
        } catch (error) {
            console.error(error);
        }
    };

    const signOut = async () => {
        await auth.signOut();
    };

    const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => { setUsername(event.target.value) };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
        (event) => { setPassword(event.target.value) };

    const cardHeader = user ? `Welcome ${user.email}` : "Login App";

    return (
        <Container className={classes.mainDiv}>
            <Box component="form"
                className={classes.container}
                noValidate
                autoComplete="off">
                {!user ?
                    (<Card className={classes.card}>
                        <CardHeader className={classes.header} title={cardHeader} />
                        <CardContent>
                            <div>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    label="Email Address"
                                    margin="normal"
                                    onChange={handleUsernameChange}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    margin="normal"
                                    onChange={handlePasswordChange}
                                />
                            </div>
                        </CardContent>
                        <CardActions>
                            <Container>
                                <Grid container spacing={2} >
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            variant="contained"
                                            onClick={signIn}
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign In
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Button
                                            color="secondary"
                                            variant="contained"
                                            onClick={createAccount}
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>
                        </CardActions>
                    </Card>
                    ) : (
                        <Card className={classes.card}>
                            <CardHeader className={classes.header} title={cardHeader} />
                            <CardContent>
                                <Button
                                    fullWidth
                                    color="secondary"
                                    variant="contained"
                                    onClick={signOut}
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign Out
                                </Button>
                            </CardContent>
                        </Card>
                    )
                }
            </Box>
        </Container>
    );
}

export default Login;