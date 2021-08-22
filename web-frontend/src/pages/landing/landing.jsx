import { React } from "react";
import Header from "../../components/header/header";
import "./landing.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <Header text="Welcome to The Coder Career." />

      <div className="landing-subheader">
        <h3>Resouces to break into, and level up in, the tech industry.</h3>
      </div>


    </>
  );
}
