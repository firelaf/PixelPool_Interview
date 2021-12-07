import React, { useRef, useEffect, useState } from "react";
import { style } from "typestyle";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { database } from "../../firebaseSetup";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { OpenTicket } from "../actions/ticketActions";
import Ticket from "../components/Ticket";
import { TicketState } from "../reducers/TicketReducer";

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
};

const db = database.collection("/tickets");

export const Tickets: React.FunctionComponent = () => {
  const ticketName = useRef<HTMLInputElement>(document.createElement("input"));
  const ticketDescription = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  //const ticketID = useRef<HTMLInputElement>(document.createElement("input"));

  const dispatch = useDispatch();
  const ticketState = useSelector((state: RootStateOrAny) => state.ticketState);
  const [tickets, updateTicketElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    getTickets();
    // eslint-disable-next-line
  }, []);

  const handleAddTicket = async () => {
    const response = await db.add({
      ticketName: ticketName.current.value,
      ticketDescription: ticketDescription.current.value,
      ticketStatus: "open",
    });
    console.log(response.id);
  };

  async function getTickets() {
    const allTickets = await db.get();
    allTickets.docs.forEach((ticket) => {
      dispatch(
        OpenTicket(
          ticket.id,
          ticket.data().ticketName,
          ticket.data().ticketDescription,
          ticket.data().ticketStatus
        )
      );
    });
  }

  function displayTickets() {
    const ticketElements = ticketState.map((ticket: TicketState) => {
      return (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          title={ticket.ticketName}
          description={ticket.ticketDescription}
        />
      );
    });
    updateTicketElements(ticketElements);
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
      {tickets}
    </div>
  );
};

export default Tickets;
