import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    secondary: {
      light: "#ffffff",
      main: "#828282",
      contrastText: "#000000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
    },
  },
});

export default theme;
