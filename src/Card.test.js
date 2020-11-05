import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';


describe('Card Component', () => {

  it('renders without crashing with no props', () => {
    let div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing with props', () => {
    let div = document.createElement('div');
    ReactDOM.render(<Card title='lorem' content='ipsum' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the card to the UI as expected with no data', () => {
    const tree = renderer
      .create(<Card />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the card to the UI as expected with data', () => {
    const tree = renderer
      .create(<Card title='lorem' content='ipsum' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});