import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Paper from "@mui/material/Paper";
import React, {ReactElement} from "react";
import {styled} from "@mui/material/styles";

const StyledGrid = styled(Grid)(({theme}) => ({
  backgroundRepeat: "no-repeat",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[50]
      : theme.palette.grey[900],
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const StyledDiv = styled("div")(({theme}) => ({
  margin: theme.spacing(8, 4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledAvatar = styled(Avatar)(({theme}) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export default function SignInSide(): ReactElement {
  return (
    <Grid container component="main" sx={{height: "100vh"}}>
      <CssBaseline />
      <StyledGrid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <StyledDiv>
          <StyledAvatar>
            <LockOutlinedIcon />
          </StyledAvatar>
          <br />
          <Button variant="contained">
            <i className="fab fa-github"></i>
            <a href="/api/administrators/auth/github">Sign in with GitHub</a>
          </Button>
        </StyledDiv>
      </Grid>
    </Grid>
  );
}
