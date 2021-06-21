import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import PostJob from './components/PostJob/PostJob';
import Contact from './components/Contact/Contact';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute';
import JobPost from './components/Sidebar/JobPost';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/admin">
              <Sidebar></Sidebar>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/postjob">
              <PostJob></PostJob>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/post">
              <JobPost></JobPost>
            </Route>
          </Switch>

        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
