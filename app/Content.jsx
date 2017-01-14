import React from 'react';
import Media from './Media.jsx';
import MediaSlider from './Slider.jsx';

var HomeContent = React.createClass({
  render: function() {

      var social = [
      {
        name: 'instagram',
        icon: 'ion social ion-social-instagram',
        url: 'https://www.instagram.com/zileeva/'
      },
      {
        name: 'facebook',
        icon: 'ion social ion-social-facebook',
        url: 'https://www.facebook.com/julia.zileeva'
      },
      {
        name: 'linkedin',
        icon: 'ion social ion-social-linkedin-outline',
        url: 'https://www.linkedin.com/in/yuliazileeva'
      }
    ];

    var socialEls = social.map(function(s) {
      return <a href={s.url} target='_blank'><i className={s.icon}></i></a>
    });

    return (
      <div className='content'>
        <div className='left-content'>
          <img src='app/images/yulia.jpg' width='500' />
        </div>
        <div className='right-content'>
          <h1>Hello! I am Yulia.</h1>
          {socialEls}
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
          <h1>I am a full stack developer at <a href='http://www.mavrck.co/' target='_blank'>Mavrck</a>, influencer marketing startup.</h1>
          <label className="label-inline">AngularJS</label>
          <label className="label-inline">Node.js</label>
          <label className="label-inline">HTML5</label>
          <label className="label-inline">CSS3</label>
        </div>

      </div>
    );
  }
});

module.exports = {
  HomeContent: HomeContent,
  MavrckContent: MavrckContent
}
