import React, {useState} from 'react';
import {BrowserRouter as Router,
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
                title="Scrollable content"
                onClose={handleChange}
            >
                <Modal.Section>
                    <Link url='http://localhost:3000/spinner'>Dinner roulette</Link>
                </Modal.Section>
                <Modal.Section>
                    <Link url='http://localhost:3000/recipes'>All recipes</Link>
                </Modal.Section>
            </Modal>
            <Heading element="h1">Magic Pantry</Heading>
            <Link url='http://localhost:3000'><img id="logo" src={logo} alt="Logo" /></Link>
        </Stack> 
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route  path='/spinner' component={Spinner}/>
                <Route path='/recipes' component={Recipes}/>
            </Switch>
        </Router>
    </>
  );

  function handleChange(){
    setActive(!active)
  }
}

export default App;
