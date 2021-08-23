import { React } from "react";
import Header from "../../components/header/header";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./about.css";
export default function About() {
  return (
    <>
      <Header text="About The Coder Career" />

      <Container className="about-us-content">
        <div className="intro-text">
          The Coder Career is a hub for for software professionals to break
          into, level up and innovate in the technology industry. We feature job
          advertisments, interesting tech stories and useful content for careers
          in tech.
        </div>
        <div>
          The Coder Career was founded by Cam Blackwood in 2020. Cam worked as a
          technical recruiter for several years before becoming a software
          engineer. After realising that there whilst the online tech ecosystem
          was fantastic for solving solutions to complex problems in software,
          there wasn't much content to help people in the early years of their
          careers. With governments worldwide promoting software engineering as
          a career and the biggest IPOs all being technology companies, there
          has never been a greater number of people wanting to take the plunge
          into the wonderful world of technology, and we want to give them all
          the help we can!
        </div>
        Contact Cam
        <div className="contact-panel">
          <img
            src="https://avatars.githubusercontent.com/u/38852603?v=4"
            width="200"
            height="200"
            alt="picture of cam"
            className="cam-picture"
          />
          <div>
            I'm currently looking for partnerships for The Coder Career to help
            establish it as a careers hub for technology professionals
            worldwide. If you think you can help, please get in touch!
          </div>
          <div>emailicon githubicon websiteicon linkedinicon</div>
        </div>
      </Container>
    </>
  );
}
