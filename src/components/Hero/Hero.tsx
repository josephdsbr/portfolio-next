import React from 'react';
import Link from '../../../node_modules/next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        José Santos' Portfolio
      </SectionTitle>
      <SectionText>
        Experienced Software Engineer adept in all stages of advanced web development. <br /> And from <b>Pernambuco, Brazil</b>.
      </SectionText>
      <Link href="#projects">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;