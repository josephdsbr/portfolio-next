import React from 'react';
import { DiJava, DiReact, DiDocker } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section nopadding id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-End / Mobile</ListTitle>
          <ListParagraph>Experienced with <br /> React.js, React Native, Angular</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size='3rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experienced with <br />Spring, Node.js, Kafka, (No)SQL</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDocker size='3rem' />
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>Experienced with <br /> Docker, Kubernetes, Jenkins, AWS</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
