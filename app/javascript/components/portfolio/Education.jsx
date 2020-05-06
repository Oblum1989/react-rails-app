import React from 'react';
import {
  Button,
  Container,
  Divider,
  Header,
  Segment
} from "semantic-ui-react";

const Education = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Container text>
      <Divider
        as="h3"
        className="header"
        horizontal
        style={{ margin: "3em 0em", textTransform: "uppercase" }}
      >
        <p>Applied Studies</p>
      </Divider>

      <Header as="h4" style={{ fontSize: "2em" }}>
        Ruby on Rails Developer - Make it Real Camp
      </Header>
      <p style={{ fontSize: "1.33em" }}>
        12 weeks full time 6PM-9PM code learning.For twelve weeks I was learning development of WEB
        applications based on Ruby On Rails
        framework and working with different technologies like HTML5, CSS3, Javascript, Postgres, GitHub, real
        time, responsive design, testing techniques, deploy with Heroku and Amazon WEB services.
      </p>
      <p style={{ fontSize: "1.33em" }}>Medellín – Antioquia</p>

      <Header as="h4" style={{ fontSize: "2em" }}>
        Ingeniero de Sistemas
      </Header>
      <p style={{ fontSize: "1.33em" }}>Universidad de Pamplona</p>
      <p style={{ fontSize: "1.33em" }}>Pamplona - N.Santander</p>

    </Container>
  </Segment>
);

export default Education;