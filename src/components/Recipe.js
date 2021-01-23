import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch, 
  useRouteMatch,
  useParams} from 'react-router-dom';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

function Recipes() {
  let match = useRouteMatch();
  let { recipeId } = useParams();
  console.log(match, recipeId)
  return (
    <>
        <h3>Requested topic ID: {recipeId}</h3>
        <Router>
            <Switch>
            <Route  path={`${match.url}/ingredients`} component={Ingredients}/>
            <Route  path={`${match.url}/instructions`} component={Instructions}/>
            </Switch>
        </Router>
    </>
  );
}

export default Recipes;
