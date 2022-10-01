import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      light: "#FFCCBC",
      main: "#FF5722",
      dark: "#E64A19",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#83b9ff",
      main: "#448aff",
      dark: "#005ecb",
      contrastText: "#fafafa",
    },
    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
});
