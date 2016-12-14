import React from 'react';
import Deck from 'react-slide-deck';
import Contents from './Content.jsx';
var HomeContent = Contents.HomeContent;
var MavrckContent = Contents.MavrckContent;

var MediaDeck = React.createClass({
  getInitialState: function() {
    return {current: 0, vertical: true, swipe: true, wheel: true, animate: true, factor: 0.3, loop: true, index: 0};
  },
  handleClick: function(event){
    let target = event.target;
    let index = Array.prototype.indexOf.call(target.parentElement.children, target);

    this.setState({current: index});
  },
  onSwitching: function(factor, deck) {
    let index = deck.state.current;
    this.setState({current: index});
  },
  onSwitchDone: function(state) {
    this.setState({index: state.current});
  },
  render: function() {
    return (
      <div className="content-wrap">
        <Deck {...this.state} onSwitching={this.onSwitching} onSwitchDone={this.onSwitchDone}>
          <Deck.Slide>
            <HomeContent />
          </Deck.Slide>
          <Deck.Slide>
            <MavrckContent />
          </Deck.Slide>
          

        </Deck>
        <ul className="indicators-wrap" onClick={this.handleClick}>
          <li className={this.state.current === 0 ? 'current' : ''}></li>
          <li className={this.state.current === 1 ? 'current' : ''}></li>
        </ul>
      </div>
    );
  }
});


export default MediaDeck;

