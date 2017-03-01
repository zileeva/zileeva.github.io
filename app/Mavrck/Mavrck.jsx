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
      <div className='mavrck column justify-between'>
        <div className='row justify-between p-85'>
          <a href='http://www.mavrck.co' target='_blank'><img width='50' src='app/images/mvk.png'/></a>
          <h1 className='bold'>M</h1>
        </div>
        <div className='column align-center center'>
          <h1>Today we drink {queryParams.beer1} and {queryParams.beer2}.</h1>
          <div className='divider'></div>
          <div className='row'>
            <a href='https://www.instagram.com/mavrckco/' target='_blank'><i className='ion ion-social-instagram'></i></a>
            <a href='https://www.facebook.com/MavrckCo/' target='_blank'><i className='ion ion-social-facebook'></i></a>
            <a href='https://www.twitter.com/MavrckCo' target='_blank'><i className='ion ion-social-twitter'></i></a>
          </div>
        </div>
        <div className='row justify-between p-85'>
          <h1 className='bold'>K</h1>
          <h1 className='bold'>V</h1>
        </div>
      </div>
    );
  }
});

export default MavrckPage;
