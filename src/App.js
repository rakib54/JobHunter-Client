import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Header/Navbar';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';
import PostJob from './components/PostJob/PostJob';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Sidebar} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/postjob" component={PostJob} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>

      </Router>
    </>
  );
}

export default App;
