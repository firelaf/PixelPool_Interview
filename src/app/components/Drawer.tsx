import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  MeetingRoom as LoginIcon,
  PermContactCalendar as ContactIcon,
  ContactSupport as TicketIcon,
  AccountCircle as AccountIcon,
} from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseSetup";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      gap: "1rem",
    },
    icon: {},
  })
);

const displayTicketsBtn = () => {
  if (!auth.currentUser) return "none";
  return "block";
};

export const DrawerComponent: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  const CloseDrawer = () => {
    setOpenDrawer(false);
  };

  const loggedIn = () => {
    if (!auth.currentUser) {
      return (
        <Link className={classes.link} to="/login">
          <LoginIcon color="secondary" />
          Login
        </Link>
      );
    }
    return (
      <Link className={classes.link} to="/login">
        <AccountIcon color="secondary" />
        User
      </Link>
    );
  };

  return (
    <Fragment>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={openDrawer} onClose={CloseDrawer} anchor="right">
        <List style={{ marginTop: "3.5em" }}>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/">
                <HomeIcon color="secondary" />
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/about">
                <InfoIcon color="secondary" />
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>{loggedIn()}</ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/contactsUs">
                <ContactIcon color="secondary" />
                Contact us
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer} sx={{ display: displayTicketsBtn }}>
            <ListItemText>
              <Link className={classes.link} to="/tickets">
                <TicketIcon color="secondary" />
                Tickets
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};
