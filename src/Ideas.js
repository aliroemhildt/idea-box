import React from 'react';
import './Ideas.css';
import Card from './Card.js';

const Ideas = ({ideas, deleteIdea}) => { //this is destructuring props as its passed in
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        key={idea.id}
        id={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}

export default Ideas;
