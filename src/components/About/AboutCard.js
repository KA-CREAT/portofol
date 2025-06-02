import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">kalkidan wubshet </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            {/* <br />
            I am currently unemployed as a software developer at Juspay.
            <br /> */}
            I have completed Integrated Bcs in software enginerring at Addis Ababa universti<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">kalkidan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
