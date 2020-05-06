import React from 'react';
import PerfilPicture from '../../../assets/images/perfil.jpg'

import {
  Button,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";

const About = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <Grid container stackable verticalAlign="middle">
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as="h3" style={{ fontSize: "2em" }}>
            About
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Ingeniero de Sistemas con grandes habilidades en desarrollo de software enfocado en Ruby
            On Rails. Visionario y apasionado por la codificación, entusiasta
            del aprendizaje continuo, con facilidades de adaptación y comunicación.
          </p>
          <p style={{ fontSize: "1.33em" }}>
            Con experiencia desarrollando habilidades en la solución a todo tipo
            de problemas planteados en el manejo y manipulación de la información aplicando análisis,
            diseño y
            construcción de soluciones informáticas que se ajusten a las necesidades, con conocimientos
            en
            Ruby, JavaScript, HTML5, CSS3, Bootstrap 4 y Ruby on Rails, planeación y ejecución de
            proyectos. Servicios
            profesionales en mantenimiento de redes de telecomunicaciones tecnologías GSM, UMTS, LTE.
          </p>
        </Grid.Column>
        <Grid.Column floated="right" width={6}>
          <Image
            bordered
            rounded
            size="large"
            src={PerfilPicture}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          <Button size="huge">Studies</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default About;