import React from 'react';
import Media from './Media.jsx';
import MediaSlider from './Slider.jsx';

var HomeContent = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <div className='left-content'>
        </div>
        <div className='right-content'>
          <h1>Hello! I am Yulia.</h1>
        </div>
      </div>
    );
  }
});

var MavrckContent = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <div className='left-content'>
          <MediaSlider></MediaSlider>
        </div>
        <div className='right-content'>
          <h1>I work at Mavrck</h1>
        </div>

      </div>
    );
  }
});

module.exports = {
  HomeContent: HomeContent,
  MavrckContent: MavrckContent
}
