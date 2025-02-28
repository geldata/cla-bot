import {createTheme} from "@mui/material/styles";
import red from "@mui/material/colors/red";

export default createTheme({
  palette: {
    primary: {
      main: "#175080",
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "outlined",
        color: "primary",
      },
    },
  },
});
