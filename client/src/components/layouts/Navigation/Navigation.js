import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useWindowSize from "../../../Hooks/WindowSizeHook";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
  menuButton: {
    color: "#ffffff",
  },
  title: {},
  link: {
    marginLeft: "20px",
    background: "#ffffff",
    color: "#3F51B5",
    padding: "4px 15px;",
    textDecoration: "none",
    fontWeight: 600,
    borderRadius: "6px;",
  },
}));

const Navigation = ({ isAuth, onClick }) => {
  const size = useWindowSize();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {size.width < 700 && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              aria-label='menu'
            >
              <MenuIcon style={{ fontSize: 40 }} />
            </IconButton>
          )}

          <Typography variant='h6' className={classes.title}>
            Fiashell
          </Typography>
          <NavLink className={classes.link} to='login'>
            Login
          </NavLink>
          <NavLink className={classes.link} to='/register'>
            Register
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
