import React from 'react';
import {Button, Card, TextContainer, Heading, TextStyle, List} from '@shopify/polaris';
import '../index.css';
import { recipeData } from "./data";

function Home() {
  const base = 'https://nat-king.github.io/magic-pantry/#';

  return (
    recipeMarkup(getRandomInt())
  );

  function recipeMarkup(number){
    const recipe = recipeData.filter((data) => {
      return data.recipeId === number;
    })
    
    return(
  <Card>
    <Card.Section>
    <div className='blurb'>
      <img 
        alt=""
        src={recipe[0].imagePath}/>
      <TextContainer className>
        <Heading>{recipe[0].name}</Heading>
          <p>
            {recipe[0].blurb}
          </p>
        <TextContainer>
          <TextStyle variation="strong">Ingredients</TextStyle>
          <List type="bullet">
            {recipe[0].ingredients.map((ingredient) => {
              return <List.Item>{ingredient.label}</List.Item>
            })}
          </List>
        </TextContainer>
      </TextContainer>
    </div>
    </Card.Section>
    <Card.Section>
       {/* todo: add the steps modal and make the component that renders one step */}
      <Button>Steps</Button>
    </Card.Section>
  </Card>
  )};
}
function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(recipeData.length);
  return Math.floor(Math.random() * (max - min) + min);
}

export default Home;
