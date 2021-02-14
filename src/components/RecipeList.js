import React from 'react';
import {Card, Link, Layout, Stack, Button, ButtonGroup, } from '@shopify/polaris';
import { recipeData } from "./data";

function RecipeList() {
  const base = 'https://nat-king.github.io/magic-pantry';
            
  return (
    <Layout>
      <Layout.Section>
        <Card sectioned={true}
        title='Instructions'
        >
          {recipeData.map((recipe) => 
          (<Card.Section>
            <Link url={`${base}/recipes/${recipe.recipeId}`}>{recipe.name}</Link>
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
