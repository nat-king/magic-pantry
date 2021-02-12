import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch} from 'react-router-dom';
import {Card, TextContainer, Button, Stack} from '@shopify/polaris';

import '../index.css';
import Recipe from './Recipe';
import { recipeData } from "./data";

function Spinner() {
  const base = 'http://localhost:3000';
  const recipeId = Math.floor(Math.random() * 10) + 1; //random
 
  const recipe = recipeData.filter((data) => {
    console.log('data: ', data.recipeId, 'var: ', recipeId )
    return data.recipeId == recipeId;
  });
  
  const recipeName = recipe[0].name;
  const recipeBlurb = recipe[0].blurb;
  
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
            <img
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              alt={recipe[0].name}
              src={recipe[0].imagePath}
            />
          </Card.Section>
          <Card.Section>
            <TextContainer>
            {recipeBlurb}
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
