import React from 'react';
import {HashRouter,
    Route,
    Switch} from 'react-router-dom';
import {Card, Link, Heading, Stack} from '@shopify/polaris'
import './index.css';
import Home from './components/Home';
import Spinner from './components/Spinner';
import Recipes from './components/Recipes';


function App() {
    return (
        <>
        <Card>
            <Stack distribution="center">
            <Link url='https://nat-king.github.io/magic-pantry'>
                <Heading element="h1">
                    <p className='title'>Magic Pantry</p>
                </Heading>
            </Link>
            </Stack>
        </Card>
        <HashRouter basename="/">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/spinner' component={Spinner}/>
                <Route path='/recipes' component={Recipes}/>
            </Switch>
        </HashRouter>
    </>
    );
}

export default App;
