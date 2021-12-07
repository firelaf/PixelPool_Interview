import { Paper, Typography, IconButton } from "@mui/material";
import {
  Cancel as CloseIcon,
  AssignmentTurnedIn as ResolveIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { style } from "typestyle";

export interface TicketProps {
  id: string;
  title: string;
  description: string;
}
const classNames = {
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

const Ticket = (props: TicketProps) => {
  return (
    <div>
      <Paper className={classNames.elements} square elevation={9}>
        <Typography className={classNames.title}>{props.title}</Typography>
        <Typography>{props.description}</Typography>
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
    </div>
  );
};

export default Ticket;
