import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages//about/about.jsx";
import Jobs from "./pages//jobs/jobs.jsx";
import Landing from "./pages/landing/landing.jsx";
import NavBar from "./components/navbar/navbar";
import MockJobs from "./assets/mockjobs";
import NewsLetter from "./pages/newsletter/newsletter";
import SubmitJob from "./pages/jobs/submit-job/SubmitJob";

export default function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jobs">
            <Jobs jobs={MockJobs()} />
          </Route>
          <Route path="/newsletter">
            <NewsLetter />
          </Route>
          <Route path="/submitjob">
            <SubmitJob />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
