import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import store from './store';

describe('App Component', () => {

  it('renders without crashing with store data', () => {
    let div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing with no store data', () => {
    let div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});


