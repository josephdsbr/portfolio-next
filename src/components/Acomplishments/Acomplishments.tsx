import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 40, text: 'Open Source Projects'},
  { number: 20, text: 'Private Projects', },
  { number: 6, text: 'In-Production Apps', },
  { number: 4, text: 'Years of experience as Software Engineer', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
