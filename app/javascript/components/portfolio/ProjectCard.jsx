import React from 'react';
import { Image, Card } from 'semantic-ui-react'

const ProjectCard = (props) => (
  <Card>
    <Image src={props.proy} />
    <Card.Content>
      <Card.Header>{props.content}</Card.Header>
      <Card.Meta>{props.year}</Card.Meta>
      <Card.Description>
        {props.tecnologies}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        {props.link}
      </a>
    </Card.Content>
  </Card>
);

export default ProjectCard;