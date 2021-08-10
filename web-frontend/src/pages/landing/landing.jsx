import { React } from "react";
import Header from "../../components/header/header";
import "./landing.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <Header text="Welcome to The Coder Career." />

      <div className="landing-subheader"><h3>Resouces to break into, and level up in, the tech industry.</h3></div>

      <div class="container">
  
        <div class="box">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <div className="inner-text">          <a
            href="https://www.youtube.com/channel/UC-m9HBSgx5drU4cqfuNg5vA"
            target="_blank"
          >
            Youtube
          </a></div>
              </div>
              <div class="flip-box-back"><a
            href="https://www.youtube.com/channel/UC-m9HBSgx5drU4cqfuNg5vA"
            target="_blank"
          >
            Check out the latest uploads...
          </a></div>
            </div>
          </div>
        </div>    
        <div class="box">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <div className="inner-text">Jobs</div>
              </div>
              <div class="flip-box-back">    <Link to="/jobs" className="navLink">
            Latest Vacancies
          </Link></div>
            </div>
          </div>
        </div>        <div class="box">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <div className="inner-text">Podcast</div>
              </div>
              <div class="flip-box-back">Coming soon!</div>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <div className="inner-text">Blog</div>
              </div>
              <div class="flip-box-back">Coming soon!</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
