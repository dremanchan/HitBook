import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

function Nav() {
  const user = useSelector((store) => store.user);
  
  return (
    <>
    {/* <AppBar position="static">
      <Toolbar disableGutters>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{flexGrow:1}}>
          HitBook
        </Typography>
      </Toolbar>
    </AppBar> */}

    <div className="nav">
      <Link to="/instructions">
        <h2 className="nav-title">HitBook</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <Link className="navLink" to="/instructions">
              Instructions
            </Link>

            <Link className="navLink" to="/buttoncheck">
              ButtonCheck
            </Link>

            <Link className="navLink" to="/gameselect">
              Game Select
            </Link>

            <Link className="navLink" to="/smashselect">
              Smash Ultimate
            </Link>

            <Link className="navLink" to="/favorite/">
              Favorites
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* Hides admin page from non admin */}
        {user.admin === true && (
          <>
            <Link className="navLink" to="/admin">
              Admin
            </Link>
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
    </>
  );
}

export default Nav;
