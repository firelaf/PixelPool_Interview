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
} from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      textDecoration: "none",
      color: "black",
      fontSize: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    },
    icon: {
      marginRight: "0.6em",
    },
  })
);

export const DrawerComponent: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  const CloseDrawer = () => {
    setOpenDrawer(false);
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
                <HomeIcon color="secondary" className={classes.icon} />
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/about">
                <InfoIcon color="secondary" className={classes.icon} />
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/login">
                <LoginIcon color="secondary" className={classes.icon} />
                Login
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/contactsUs">
                <ContactIcon color="secondary" className={classes.icon} />
                Contact us
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/tickets">
                <TicketIcon color="secondary" className={classes.icon} />
                Tickets
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Fragment>
  );
};
