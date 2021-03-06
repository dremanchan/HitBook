import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InstructionsPage from "../InstructionsPage/InstructionsPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import GameSelect from "../GameSelect/GameSelect";
import SmashSelect from "../SmashSelect/SmashSelect";
import AdminPage from "../AdminPage/AdminPage";
import SmashCharacter from "../SmashCharacter/SmashCharacter";
import FavoritePage from "../FavoritePage/FavoritePage";
import UpdateCharacter from '../UpdateCharacter/UpdateCharacter';
import AddMove from '../AddMove/AddMove';
import UpdateMove from '../UpdateMove/UpdateMove';


import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

import "./App.css";

import { GamepadsProvider } from "react-gamepads";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (

    

    
    <Container maxWidth="xs">
      <GamepadsProvider>
        <Router>
          <div>
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/instructions */}
              <Redirect exact from="/" to="/instructions" />

              {/* Visiting localhost:3000/about will show the about page. */}
              <Route
                // shows AboutPage at all times (logged in or not)
                exact
                path="/about"
              >
                <AboutPage />
              </Route>

              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute
                // logged in shows UserPage else shows LoginPage
                exact
                path="/user"
              >
                <UserPage />
              </ProtectedRoute>

              <ProtectedRoute
                // logged in shows InfoPage else shows LoginPage
                exact
                path="/instructions"
              >
                <InstructionsPage />
              </ProtectedRoute>

              <ProtectedRoute exact path="/buttoncheck">
                <ButtonCheck />
              </ProtectedRoute>

              <ProtectedRoute exact path="/gameselect">
                <GameSelect />
              </ProtectedRoute>

              <ProtectedRoute exact path="/smashselect">
                <SmashSelect />
              </ProtectedRoute>

              {/* Route to admin page */}
              <ProtectedRoute exact path="/admin">
                <AdminPage />
              </ProtectedRoute>

              {/* Route to character page */}
              <ProtectedRoute exact path="/smashcharacter/:id">
                <SmashCharacter />
              </ProtectedRoute>

              {/* Route to favorite page */}
              <ProtectedRoute exact path="/favorite">
                <FavoritePage />
              </ProtectedRoute>

              {/* Route to update character page */}
              <ProtectedRoute exact path="/updatecharacter/:id">
                <UpdateCharacter />
              </ProtectedRoute>

              {/* Route to add move page */}
              <ProtectedRoute exact path="/addmove">
                <AddMove />
              </ProtectedRoute>

              {/* Route to update move page */}
              <ProtectedRoute exact path="/updatemove">
                <UpdateMove />
              </ProtectedRoute>

              <Route exact path="/login">
                {user.id ? (
                  // If the user is already logged in,
                  // redirect to the /user page
                  <Redirect to="/instructions" />
                ) : (
                  // Otherwise, show the login page
                  <LoginPage />
                )}
              </Route>

              <Route exact path="/registration">
                {user.id ? (
                  // If the user is already logged in,
                  // redirect them to the /user page
                  <Redirect to="/instructions" />
                ) : (
                  // Otherwise, show the registration page
                  <RegisterPage />
                )}
              </Route>

              {/* <Route exact path="/home">
                {user.id ? (
                  // If the user is already logged in,
                  // redirect them to the /instructions page
                  <Redirect to="/instructions" />
                ) : (
                  // Otherwise, show the Landing page
                  <LandingPage />
                )}
              </Route> */}

              {/* If none of the other routes matched, we will show a 404. */}
              <Route>
                <h1>404</h1>
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </GamepadsProvider>
      </Container>
   
  );
}

export default App;
