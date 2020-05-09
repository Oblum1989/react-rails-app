import React from 'react';
import { Grid, Container, Divider, Segment } from 'semantic-ui-react'
import ProyectCard from './ProyectCard'
import Proy1 from '../../../assets/images/proy1.png';
import Proy2 from '../../../assets/images/proy2.png';
import Proy3 from '../../../assets/images/proy3.png';
import Proy4 from '../../../assets/images/proy4.png';
import Proy5 from '../../../assets/images/proy5.png';
import Proy6 from '../../../assets/images/proy6.png';

const Portfolio = () => (
  <Segment style={{ padding: "8em 0em" }} vertical>
    <div id="tf-portfolio">
      <Container>
        <Divider
          as="h3"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <p>My Latest Works</p>
        </Divider>
        <Grid container columns={3}>
          <Grid.Column>
            <ProyectCard 
              proy={Proy1}
              content='Network diseño de Apps para empresa'
              tecnologies='HTML | CSS | JavaScript'
              year='2018'
              link='Visit...'
            />
          </Grid.Column>
          <Grid.Column>
            <ProyectCard 
              proy={Proy2}
              content='StudioDev creación de aplicaciones'
              tecnologies='HTML | CSS | JavaScript'
              year='2018'
              link='Visit...'
            />
          </Grid.Column>
          <Grid.Column>
            <ProyectCard 
              proy={Proy3}
              content='SuperBlog - Blog creado con Rails'
              tecnologies='Ruby on Rails | Bootstrap | MySQL'
              year='2019'
              link='Visit...'
            />
          </Grid.Column>
          <Grid.Column>
            <ProyectCard 
              proy={Proy4}
              content='Aplicacion en Rails clon de Stack OverFlow'
              tecnologies='Ruby on Rails | Bootstrap | MySQL | Markdown'
              year='2019'
              link='Visit...'
            />
          </Grid.Column>
          <Grid.Column>
            <ProyectCard 
              proy={Proy5}
              content='PetShop Baco - Ecommerce para una veterinaria'
              tecnologies='Ruby on Rails | Bootstrap | MySQL | JavaScript'
              year='2019'
              link='Visit...'
            />
          </Grid.Column>
          <Grid.Column>
            <ProyectCard 
              proy={Proy6}
              content='Ecommerce ejercicio practico en Bootstrap'
              tecnologies='HTML | CSS | JavaScript | Bootstrap'
              year='2019'
              link='Visit...'
            />
          </Grid.Column>
        </Grid> 
      </Container>
    </div>
  </Segment>
);

export default Portfolio;