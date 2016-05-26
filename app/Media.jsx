import React from 'react';

var Media = React.createClass({
  render: function() {
    return <img src={this.props.src} width={this.props.width}  />
  }
});

export default Media;