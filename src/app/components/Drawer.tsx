import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
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
    },
    icon: {
      color: "white",
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
      <Drawer open={openDrawer} onClose={CloseDrawer} anchor="right">
        <List>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/">
                Home
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/about">
                About
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/contactsUs">
                Contact us
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={CloseDrawer}>
            <ListItemText>
              <Link className={classes.link} to="/tickets">
                Tickets
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );
};
