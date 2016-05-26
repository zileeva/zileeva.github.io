import React from 'react';
import {render} from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import TodoApp from './TodoApp.jsx';

import Header from './Header.jsx';
import MediaDeck from './MediaDeck.jsx';


class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <MediaDeck />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));