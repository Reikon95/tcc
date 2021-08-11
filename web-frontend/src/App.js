import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages//about/about.jsx";
import Jobs from "./pages//jobs/jobs.jsx";
import Landing from "./pages/landing/landing.jsx";
import NavBar from "./components/navbar/navbar";
import MockJobs from "./assets/mockjobs";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jobs">
            <Jobs jobs={MockJobs()} />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
