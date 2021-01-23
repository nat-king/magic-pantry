import React from 'react';
import {BrowserRouter as Router,
  Route,
  Switch, 
  useRouteMatch
} from 'react-router-dom';
import Recipe from './Recipe';
import RecipeList from './RecipeList';


function Recipes() {
  let match = useRouteMatch();
  return (
    <>
      <Router>
        <Switch>
          <Route path={`${match.url}/:recipeId`} component={Recipe}/>
          <Route path={`${match.url}`} component={RecipeList}/>
        </Switch>
      </Router>
    </>
  );
}

export default Recipes;
