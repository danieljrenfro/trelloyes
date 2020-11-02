import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  
  let allCards = props.store.STORE.allCards;

  function cardsArray(list) {
    let cards = list.cardIds.map(cardId => {
      return allCards[cardId];
    });
    return cards;
  }
  
  let cardLists = props.store.STORE.lists.map(list => {
    return <List key={list.id} cards={cardsArray(list)} header={list.header} />;
  })
  
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes</h1>
      </header>
      <div className='App-list'>
        {cardLists}
      </div>
    </main>
  );
    
}

export default App;
