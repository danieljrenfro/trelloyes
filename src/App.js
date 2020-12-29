import React, {Component} from 'react';

import List from './List';
import store from './store';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      allCards: {}
    }
  }

  componentDidMount() {
    this.setState({
      lists: store.lists,
      allCards: store.allCards
    })
  }

  handleAddRandomCardClicked = (listId) => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
      }
    }

    const newCard = newRandomCard();

    this.setState({ allCards: { ...this.state.allCards, [newCard.id]: newCard }})
    
    const newLists = this.state.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id);
        return list;
      }
      return list;
    })

    this.setState({ lists: newLists });
    console.log('State', this.state);
  }
  
  render () {
    const { lists, allCards } = this.state;

    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {lists.map(list => (
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => allCards[id])}
              addRandomCard={this.handleAddRandomCardClicked}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
