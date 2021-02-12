import React, {useState} from 'react';
import {Card, Layout, Stack, Button, ButtonGroup, OptionList} from '@shopify/polaris';
import {useRouteMatch} from 'react-router-dom';
import { recipeData } from "./data";


function Ingredients() {
  let match = useRouteMatch();
  const [selected, setSelected] = useState([]);
  const recipeId =  match.url.slice(9,-12);
  const recipe = recipeData.filter((data) => {
    return data.recipeId == recipeId;
  });

  const ingredientsList = recipe[0].ingredients;
  
  const recipeUrl = `http://localhost:3000${match.url.slice(0,-12)}`;
  
  return (
    <Layout>
      <Layout.Section>
        <Card sectioned={true}
        title='Ingredients'
        >
          <OptionList
            onChange={setSelected}
            options={ingredientsList}
            selected={selected}
            allowMultiple
          />
        </Card>
      </Layout.Section>
      <Layout.Section>
      <Stack vertical={true} spacing="extraLoose" alignment="center">
      <ButtonGroup>
        <Button url={`${recipeUrl}`}>Back</Button>
        <Button url={`${recipeUrl}/instructions`}>Instructions</Button>
      </ButtonGroup>
      </Stack>
      </Layout.Section>
   </Layout>
  );
}

export default Ingredients;
