import React from 'react';
import {Button, Card, Stack} from '@shopify/polaris';
import '../index.css';

function Home() {
  const base = 'https://nat-king.github.io/magic-pantry';
  
  return (
    <Card>
      <Card.Section>
      <img id="bg" src='https://media.giphy.com/media/l4FGBE6xf8x9Xn8ME/giphy.gif' alt="bg" />
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
