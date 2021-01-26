import React from 'react';
import {Card, Link, Layout, Stack, Button, ButtonGroup, } from '@shopify/polaris';

function RecipeList() {
  const base = 'http://localhost:3000';
  let recipes = [{name:'step number 1', id: '1'}, 
              {name: 'Step numero doux', id: '2'},
              {name:'Step numero tres', id:'3'}
            ];

  return (
    <Layout>
      <Layout.Section>
        <Card sectioned={true}
        title='Instructions'
        >
          {recipes.map((recipe) => 
          (<Card.Section>
            <Link url={`${base}/recipes/${recipe.id}`}>{recipe.name}</Link>
          </Card.Section>))}
        </Card>
      </Layout.Section>
      <Layout.Section>
      <Stack vertical={true} spacing="extraLoose" alignment="center">
      <ButtonGroup>
        <Button url={`${base}`}>Back</Button>
        <Button url={`${base}/spinner`}>What's for dinner</Button>
      </ButtonGroup>
      </Stack>
      </Layout.Section>
   </Layout>
  );
}

export default RecipeList;
