import React from 'react';
import Media from './Media.jsx';
import MediaSlider from './Slider.jsx';

var Content = React.createClass({
  render: function() {

    return (
          <div className='content'>
            <div className='left-content'>
              <img src={this.props.section.src} />
            </div>
            <div className='right-content column justify-around'>
              <div className='section-label'>{this.props.section.label}</div>
              <h1 className='section-header'>{this.props.section.header}</h1>
              <div className='section-divider'></div>
              <div className='section-description'>
                <p>{this.props.section.description}</p>
              </div>
              <div className='row justify-end m-0-85'>{this.props.section.links}</div>
            </div>
          </div>
      );
  }
});

module.exports = {
  Content: Content
}
