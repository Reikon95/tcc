import { React } from "react";
import Header from "../../components/header/header";
import "./landing.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Landing() {
  return (
    <div className="landing-page-wrapper">
      <Header text="Welcome to The Coder Career." />

      <div className="landing-subheader">
        <h3>
          Resouces to break into level up and innovate in the tech industry.
        </h3>
        <div>
          There's plenty of information on solving technical issues online, but
          why not career issues?
        </div>
        <div>That's where The Coder Career comes in!</div>
      </div>
    </div>
  );
}
