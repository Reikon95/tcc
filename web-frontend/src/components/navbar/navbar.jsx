import { React } from "react";
import "./navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div class="nav">
      <ul>
        <li>
          <Link to="/about" className="navLink">
            About
          </Link>
        </li>
        <li>
          <Link to="/jobs" className="navLink">
            Jobs
          </Link>
        </li>
        <li>
          <Link to="/newsletter" className="navLink">
            Newsletter
          </Link>
        </li>
        <li>
          <Link to="/podcast" className="navLink">
            Podcast
          </Link>
        </li>
      </ul>
    </div>
  );
}
