import React from 'react';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router'

var MavrckPage = React.createClass({
  render: function() {
    console.log(this.props.location)
    var queryParams = this.props.location.query;
    if (!queryParams.beer1 && !queryParams.beer2) {
      var fuckedUp = true;
    }
    return (
      <div className='mavrck flex-column'>
        <div className='mavrck-overlay'></div>
        <div className='flex-item-1'>
          <h1 className='huge'>Today we drink at Mavrck</h1>
        </div>
        <div className='flex-item-1'>
          {fuckedUp ? (<h1>Nothing. You fucked up.</h1>) : (<div><h1>{queryParams.beer1}</h1>and<h1>{queryParams.beer2}</h1></div>)}
        </div>
      </div>
    );
  }
});

export default MavrckPage;
