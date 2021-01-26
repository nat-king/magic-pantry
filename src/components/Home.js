import React from 'react';
import {Button, Card, Stack} from '@shopify/polaris';
import pic from '../bg.png';
import '../index.css';

function Home() {
  const base = 'http://localhost:3000';
  
  return (
    <Card>
      <Card.Section>
      <img id="bg" src={pic} alt="bg" />
      </Card.Section>
      <Card.Section>
      <Card.Subsection>
        <Stack distribution="center" spacing="loose" alignment="center">
        <Button url={`${base}/spinner`}>What's for dinner</Button>
        </Stack>
      </Card.Subsection>
      <Card.Subsection>
        <Stack distribution="center" spacing="loose" alignment="center">
          <Button url={`${base}/recipes`}>See all recipes</Button>
        </Stack>
      </Card.Subsection>
      </Card.Section>
    </Card>    
  );
}

export default Home;
