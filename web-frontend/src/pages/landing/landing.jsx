import { React } from "react";
import Header from '../../components/header/header'
import "./landing.css"
export default function Landing() {
  return (
    <>
      <Header text="Welcome to The Coder Career." />

        <div>
            Resouces to break into, and level up in, the tech industry.
        </div>

        <div class="container">
        <div class="box">Youtube</div>
        <div class="box">Jobs</div>
        <div class="box">Podcast</div>
        <div class="box">Blog</div>
</div>
    </>
  );
}
