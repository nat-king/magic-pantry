import React from 'react';
import {HashRouter,
  Route,
  Switch, 
  useRouteMatch
} from 'react-router-dom';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import Ingredients from './Ingredients';
import Instructions from './Instructions';


function Recipes() {
  let match = useRouteMatch();
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route path={`${match.url}/:recipeId`} component={Recipe}/>
          <Route path={`${match.url}/:recipeId/ingredients`} component={Ingredients}/>
          <Route path={`${match.url}/:recipeId/instructions`} component={Instructions}/>
          <Route path={`${match.url}`} component={RecipeList}/>
        </Switch>
      </HashRouter>
    </>
  );
}

export default Recipes;
