import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch, 
  useRouteMatch} from 'react-router-dom';
import {Card, TextContainer} from '@shopify/polaris';
import pic from '../bg.png';
import '../index.css';
import Recipe from './Recipe';



function Spinner() {
  let match = useRouteMatch();
  const recipeName = 'Veggie burger'
  const recipeId = '1'
  return (
    <>
      <Card
        title={recipeName}
        secondaryFooterActions={[
          {content: 'Nay', url: `${match.url}/spinner`}
        ]}
        primaryFooterAction={
          {content: 'Yay', url: `${match.url}/${recipeId}`}
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
      <Router>
        <Switch>  
          <Route  path={`${match.url}/:recipeId`} component={Recipe}/>
        </Switch>
      </Router>
    </>
  );
}

export default Spinner;
