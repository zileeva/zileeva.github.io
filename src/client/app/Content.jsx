import React from 'react';
import Media from './Media.jsx';
import MediaSlider from './Slider.jsx';

var Content = React.createClass({
  render: function() {
    return (
      <div className='content'>
        <div className='right-content'>
          <h1>Hello! I'm Yulia, web designer & developer.</h1>
          <div className='divider'></div>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget turpis eu ligula semper vehicula quis et ante. Mauris ac nunc arcu. Etiam accumsan pulvinar mi, in porttitor turpis congue non. Curabitur et magna ac turpis congue tincidunt. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</h4>
        </div>

      </div>
    );
  }
});

export default Content;