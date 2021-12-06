import React from "react";
import { style } from "typestyle";
import { Paper, Typography, IconButton } from "@mui/material";
import {
  DoDisturb as CloseIcon,
  CheckCircle as ResolveIcon,
} from "@mui/icons-material";

const classNames = {
  wrapper: style({
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  elements: style({
    width: "70vw",
    height: "7vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1.5em",
    margin: "0.5em 0",
  }),
  title: style({
    fontWeight: "bold",
    marginRight: "3em",
  }),
  iconButton: style({
    marginLeft: "auto",
  }),
};

export const Tickets: React.FunctionComponent = () => {
  return (
    <div className={classNames.wrapper}>
      <h1>Tickets</h1>
      <Paper className={classNames.elements} square elevation={9}>
        <Typography className={classNames.title}>Title</Typography>
        <Typography>Description</Typography>
        <IconButton className={classNames.iconButton}>
          <ResolveIcon></ResolveIcon>
        </IconButton>
        <IconButton>
          <CloseIcon></CloseIcon>
        </IconButton>
      </Paper>
      <Paper className={classNames.elements} square elevation={9}>
        Tickets
      </Paper>
    </div>
  );
};

export default Tickets;
