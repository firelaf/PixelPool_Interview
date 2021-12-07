import React, { useRef } from "react";
import { style } from "typestyle";
import {
  Paper,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import {
  Cancel as CloseIcon,
  AssignmentTurnedIn as ResolveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { database } from "../../firebaseSetup";
import { useDispatch } from "react-redux";
import { OpenTicket } from "../actions/ticketActions";

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
    minHeight: "7vh",
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

const db = database.collection("/tickets");

export const Tickets: React.FunctionComponent = () => {
  const ticketName = useRef<HTMLInputElement>(document.createElement("input"));
  const ticketDescription = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const ticketID = useRef<HTMLInputElement>(document.createElement("input"));

  const dispatch = useDispatch();

  const addTicketState = () => {
    dispatch(OpenTicket(ticketID.current.value));
  };

  const handleAddTicket = () => {
    console.log(ticketName.current.value);
    console.log(ticketDescription.current.value);

    db.add({
      ticketName: ticketName.current.value,
      ticketDescription: ticketDescription.current.value,
      ticketStatus: "open",
    });
  };

  async function getTickets() {
    const allTickets = await db.get();
    allTickets.docs.forEach((ticket) => {
      console.log(ticket.data(), ticket.id);
    });
  }

  return (
    <div className={classNames.wrapper}>
      <h1>Tickets</h1>
      <Paper
        className={classNames.elements}
        square
        elevation={9}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography sx={{ fontWeight: "bold" }}>New Ticket</Typography>
        <TextField
          variant="standard"
          label="Ticket Name"
          inputRef={ticketName}
        />
        <TextField
          variant="standard"
          label="Ticket Description"
          inputRef={ticketDescription}
        />
        <Button onClick={handleAddTicket} sx={{ fontWeight: "bold" }}>
          Add Ticket
        </Button>
      </Paper>
      <Paper className={classNames.elements} square elevation={9}>
        <Typography className={classNames.title}>Title</Typography>
        <Typography>Description</Typography>
        <IconButton color="primary" className={classNames.iconButton}>
          <ResolveIcon></ResolveIcon>
        </IconButton>
        <IconButton>
          <CloseIcon></CloseIcon>
        </IconButton>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </Paper>
      <Paper className={classNames.elements} square elevation={9}>
        <Button variant="outlined" onClick={getTickets}>
          Get Tickets
        </Button>
        <TextField variant="standard" label="Ticket ID" inputRef={ticketID} />
        <Button variant="outlined" onClick={addTicketState}>
          Add
        </Button>
      </Paper>
    </div>
  );
};

export default Tickets;
