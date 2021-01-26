import React, {useState} from 'react';
import {Card, Layout, Stack, Button, ButtonGroup, OptionList} from '@shopify/polaris';
import {useRouteMatch} from 'react-router-dom';

function Ingredients() {
  let match = useRouteMatch();
  const [selected, setSelected] = useState([]);
  const ingredientsList = [
    {value: 'online_store', label: 'Online Store'},
    {value: 'messenger', label: 'Messenger'},
    {value: 'facebook', label: 'Facebook'},
    {value: 'wholesale', label: 'Wholesale'},
    {value: 'buzzfeed', label: 'BuzzFeed'},
  ]
  const recipeUrl = `http://localhost:3000${match.url.slice(0,-12)}`;
  console.log(recipeUrl)
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
