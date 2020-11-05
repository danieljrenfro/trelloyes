import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

import store from './store';

describe('List Component', () => {


  it('renders without crashing with no cards', () => {
    let cards = [];
    let div = document.createElement('div');
    ReactDOM.render(<List cards={cards} header=''  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing with cards', () => {
    let cards = store.lists[0].cardIds.map(id => store.allCards[id]);
    let div = document.createElement('div');
    ReactDOM.render(<List cards={cards} header='List 1' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected with no cards', () => {
    let cards = [];
    
    const tree = renderer
      .create(<List cards={cards} header='' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the UI as expected with cards', () => {
    let cards = store.lists[0].cardIds.map(id => store.allCards[id]);

    const tree = renderer
      .create(<List cards={cards} header='' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});