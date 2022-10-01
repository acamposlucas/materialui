import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: orange[400],
      dark: orange[800],
      light: orange[500],
      contrastText: "#000000",
    },
    secondary: {
      main: blue[300],
      dark: blue[400],
      light: blue[100],
      contrastText: "#000000",
    },
    background: {
      default: "#f7f6f3",
      paper: "#ffffff",
    },
  },
});
