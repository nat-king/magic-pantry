import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch, 
  useRouteMatch,
  useParams} from 'react-router-dom';
import {Card, Stack, Button, ButtonGroup} from '@shopify/polaris';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import pic from '../images/bg.png';
import '../index.css';
import { recipeData } from "./data";

function Recipes() {
  let match = useRouteMatch();
  const base = 'http://localhost:3000';
  const { recipeId } = useParams();
  const recipe = recipeData.filter((data) => {
    return data.recipeId === recipeId;
  });
  
  const recipeName = recipe[0].name
  const markUp = (

    <Stack vertical={true} spacing="extraLoose" alignment="center">
      <Card
        title={recipeName}
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
        <ButtonGroup fullWidth={true}>
          <Button url={`${match.url}/ingredients`}>Ingredients</Button>
          <Button url={`${match.url}/instructions`}>Instructions</Button>
        </ButtonGroup>
        </Card.Section>
      </Card>
      <ButtonGroup>
        <Button url={`${base}/spinner`}>Back</Button>
        <Button url={`${base}/recipes`}>See all recipes</Button>
      </ButtonGroup>
    </Stack>
  );
  return (
      <Router>
          <Switch>  
          <Route path={`${match.url}/ingredients`} component={Ingredients}/>
          <Route path={`${match.url}/instructions`} component={Instructions}/>
          <Route path={`${match.url}`}>{markUp}</Route>
          </Switch>
      </Router>
    
  );
}

export default Recipes;