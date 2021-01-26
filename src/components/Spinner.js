import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import {Card, TextContainer, Button, Stack} from '@shopify/polaris';
import pic from '../bg.png';
import '../index.css';
import Recipe from './Recipe';



function Spinner() {
  const base = 'http://localhost:3000';
  const recipeName = 'Veggie burger'
  const recipeId = '1'
  return (
    <>
    <Stack vertical={true} spacing="extraLoose" alignment="center">
        <Card
          title={recipeName}
          secondaryFooterActions={[
            {content: 'Nay', url: `${base}/spinner`}
          ]}
          primaryFooterAction={
            {content: 'Yay', url: `${base}/recipes/${recipeId}`}
          }
        >
          <Card.Section>
            <img id="bg" src={pic} alt="bg" />
          </Card.Section>
          <Card.Section>
            <TextContainer>
              Healthy veggie burgers, homemade bean patty, veggies and homemade chipotle sauce.
            </TextContainer>
          </Card.Section>
        </Card>

        <Button fullWidth={true} url={`${base}/recipes`}>See all recipes</Button>

      </Stack>
      <Router>
        <Switch>  
          <Route  path={`${base}/:recipeId`} component={Recipe}/>
        </Switch>
      </Router>
    </>
  );
}

export default Spinner;
