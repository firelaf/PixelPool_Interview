import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const StartPage: React.FunctionComponent<{}> = () => {
  //const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);
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
    </div>
  );
};
