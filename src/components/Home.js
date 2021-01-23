import React from 'react';
import {Button, Card, Stack} from '@shopify/polaris';
import pic from '../bg.png';
import '../index.css';

function Home() {
  return (
    <Card>
      <Card.Section>
      <img id="bg" src={pic} alt="bg" />
      </Card.Section>
      <Card.Section>
      <Card.Subsection>
        <Stack distribution="center" spacing="loose" alignment="center">
        <Button>What's for dinner</Button>
        </Stack>
      </Card.Subsection>
      <Card.Subsection>
        <Stack distribution="center" spacing="loose" alignment="center">
          <Button>See all recipes</Button>
        </Stack>
      </Card.Subsection>
      </Card.Section>
    </Card>    
  );
}

export default Home;
