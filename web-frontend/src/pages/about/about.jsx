import { React } from "react";
import Header from "../../components/header/header";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function About() {
  return (
    <>
      <Header text="About The Coder Career" />

      <Container>
        <div>
          The Coder Career is a hub for for software professionals to break into
          and level udiv in the industry. We feature job advertisments and
          useful content.
        </div>
      </Container>
    </>
  );
}
