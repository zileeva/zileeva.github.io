import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

import Header from './Header.jsx';
import MediaDeck from './MediaDeck.jsx';
import MavrckPage from './Mavrck/Mavrck.jsx';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <MediaDeck />
      </div>
    )
  }
})

const Mavrck = React.createClass({
  render() {
    return (
      <MavrckPage location={this.props.location}/>
      )
  }
})

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main} />
        <Route path="/mavrck" component={Mavrck} />
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));