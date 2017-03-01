import React from 'react';
import Media from './Media.jsx';
import MediaSlider from './Slider.jsx';


var Footer = React.createClass({
  render: function() {
    return (
          <div className='footer column align-center justify-center accent-bg'>
              Start a new project with me
              <div className='row m-20-0'>
                <a href='mailto:zileeva.y@gmail.com'><i className='ion social m-20 ion-ios-email'></i></a>
                <a href='http://www.linkedin.com/in/yuliazileeva' target='_blank'><i className='ion social m-20 ion-social-linkedin'></i></a>
              </div>
              <a href='app/images/Resume.pdf' target='_blank'>Resume</a>
          </div>
      );
  }
});
var Content = React.createClass({
  render: function() {

    var imagesClassName = this.props.section.src.className;
    var images = this.props.section.src.src.map(function (image, index) {
      var className = 'entering index-' + index + ' ';
      if (index > 0) className += 'delayed ';
      className += imagesClassName;
      return <img src={image} className={className}/>
    });

    return (
          <div>
            <div className='content'>
              {!this.props.isMobile &&
                <div className='left-content column align-center item-3'>
                  {images}
                </div>
              }
              <div className='right-content column item-2 justify-around'>
                <div className='section-label'>{this.props.section.label}</div>
                <h1 className='section-header entering-short'>{this.props.section.header}</h1>
                <div className='section-divider growing'></div>
                <div className='section-description'>
                  <p>{this.props.section.description}</p>
                  {this.props.section.url && 
                    <p className='small-label'><a href={this.props.section.url} target='_blank'>see more</a></p>}
                  {this.props.section.resume && 
                    <p className='small-label'><a href={this.props.section.resume} target='_blank'>resume</a></p>}
                </div>
                <div className='row justify-end m-0-85'>{this.props.section.links}</div>
                {this.props.isMobile &&
                  <div className='column align-center m-85-0'>{images[0]}</div>
                }
              </div>
            </div>
            {this.props.section.final && <Footer></Footer>}
          </div>
      );
  }
});

module.exports = {
  Content: Content
}
