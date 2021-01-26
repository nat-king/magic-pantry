import React from 'react';
import {Card, Layout, Stack, Button, ButtonGroup, } from '@shopify/polaris';
import {useRouteMatch} from 'react-router-dom';

function Instructions() {
  let match = useRouteMatch();

  const recipeUrl = `http://localhost:3000${match.url.slice(0,-13)}`;
  console.log(recipeUrl)
  let inst = ['step number 1', 'Step numero doux', 'Step numero tres'];

  return (
    <Layout>
      <Layout.Section>
        <Card sectioned={true}
        title='Instructions'
        >
          {inst.map((ins) => 
          (<Card.Section>{ins}</Card.Section>))}
        </Card>
      </Layout.Section>
      <Layout.Section>
      <Stack vertical={true} spacing="extraLoose" alignment="center">
      <ButtonGroup>
        <Button url={`${recipeUrl}`}>Back</Button>
        <Button url={`${recipeUrl}/ingredients`}>Ingredients</Button>
      </ButtonGroup>
      </Stack>
      </Layout.Section>
   </Layout>
  );
}

export default Instructions;
