import {React} from 'react'
import './navbar.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function NavBar() {
    return (
<div class="nav">
          <ul>
            <li>
              <Link to="/" className="navLink">Home</Link>
            </li>
            <li>
              <Link to="/about"  className="navLink">About</Link>
            </li>
            <li>
              <Link to="/jobs"  className="navLink">Jobs</Link>
            </li>
          </ul>
      </div>    )
}

// <div class="nav">
//   <ul>
//     <li><a href="#" class="nav-link">Home</a></li>
//     <li><a href="#" class="nav-link"><em>Act Now!</em></a></li>
//     <li><a href="#" class="nav-link">FAQ</a></li>
//     <li><a href="#" class="nav-link">Contact Us</a></li>
//   </ul>
// </div>