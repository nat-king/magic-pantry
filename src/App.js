import React, {useState} from 'react';
import {BrowserRouter as Router,
    Route,
    Switch} from 'react-router-dom';
import {Button, Modal, TextContainer, Stack, Heading} from '@shopify/polaris'
import './index.css';
import Home from './components/Home';
import Spinner from './components/Spinner';
import Recipes from './components/Recipes';
import logo from './logo.png';


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
                {Array.from({length: 5}, (_, index) => (
                <Modal.Section key={index}>
                    <TextContainer>
                    <p>Item #{index}</p>
                    </TextContainer>
                </Modal.Section>
                ))}
            </Modal>
            <Heading element="h1">Magic Pantry</Heading>
            <img id="logo" src={logo} alt="Logo" />;
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
