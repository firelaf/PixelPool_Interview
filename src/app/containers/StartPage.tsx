import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { logIn } from "../actions/userActions";
//import { logIn, logOut } from "../actions/userActions";

export const StartPage: React.FunctionComponent<{}> = () => {
  //const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Button
        sx={{
          marginTop: "40px",
          marginLeft: "70px",
          bgcolor: "secondary.light",
          color: "secondary.contrastText",
          fontWeight: "bold",
        }}
        component={Link}
        to="/about"
        onClick={() => console.log("Button Clicked!")}
        variant={"contained"}
        color={"primary"}
      >
        About
      </Button>
      <Button
        sx={{
          marginTop: "40px",
          marginLeft: "70px",
          bgcolor: "secondary.light",
          color: "secondary.contrastText",
          fontWeight: "bold",
        }}
        onClick={() => dispatch(logIn())}
        variant={"contained"}
        color={"primary"}
      >
        isLogged
      </Button>
    </div>
  );
};
