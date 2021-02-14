import React, {useState} from 'react';
import {HashRouter,
    Route,
    Switch} from 'react-router-dom';
import {Button, Modal, Link, Stack, Heading} from '@shopify/polaris'
import './index.css';
import Home from './components/Home';
import Spinner from './components/Spinner';
import Recipes from './components/Recipes';
import logo from './images/logo.png';


function App() {
  const [active, setActive] = useState(false);
  const activator = <Button onClick={handleChange}>Menu</Button>;
  return (
    <>
        <Stack distribution="center" spacing="loose" alignment="center">
            <Modal
                activator={activator}
                open={active}
                title="Menu"
                onClose={handleChange}
            >
                <Modal.Section>
                    <Link onClick={handleChange} url='https://nat-king.github.io/magic-pantry/#/spinner'>Dinner roulette</Link>
                </Modal.Section>
                <Modal.Section>
                    <Link onClick={handleChange} url='https://nat-king.github.io/magic-pantry/#/recipes'>All recipes</Link>
                </Modal.Section>
            </Modal>
            <Heading element="h1">Magic Pantry</Heading>
            <Link url='https://nat-king.github.io/magic-pantry'><img id="logo" src={logo} alt="Logo" /></Link>
        </Stack> 
        <HashRouter basename="/">
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/spinner' component={Spinner}/>
                <Route path='/recipes' component={Recipes}/>
            </Switch>
        </HashRouter>
    </>
  );

  function handleChange(){
    setActive(!active)
  }
}

export default App;
