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
          <img src='app/images/yulia_3.jpg' />
        </div>
        <div className='right-content'>
          <div className='section-label'>hello i am</div>
          
          <h1 className='section-header'>Yulia
          <br></br>Web Developer</h1>

          <div className='section-divider'>
          </div>

          <div className='section-description'>
            <p>Experience in web development focusing on user interaction and user experience. 
              Currently working as a full stack developer at <a href='https://mavrck.co' target='_blank'>Mavrck</a>.</p>
          </div>

          <div className='row'>{socialEls}</div>

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
          <img src='app/images/long_home.png'/>
        </div>
        <div className='right-content'>
          <div className='section-label'>latest works</div>
          
          <h1 className='section-header'>Mavrck&#39;s
          <br></br>Influencer Program</h1>

          <div className='section-divider'></div>

          <div className='section-description'>
            <p>Worked on front-end and back-end implementation of the platform for the brand&#39;s influencers, as well as its design.</p>
          </div>

          <div className='row m-20-0'>
            <b><span className='m-10-10-10-0'>AngularJS</span>
            <span className='m-10-10-10-0'>Node.js</span>
            <span className='m-10-10-10-0'>HTML5</span>
            <span className='m-10-10-10-0'>CSS3</span></b>
          </div>

        </div>
      </div>

      /*<div className='content'>
        <div className='row align-center'>
          <div className='column item-2'>
            <MediaSlider />
          </div>
          <div className='column item-1'>
            <h1>Influencer Program</h1>
            <div className='divider'></div>
            <p>Full Stack Developer at <a href='https://mavrck.co' target='_blank'>Mavrck</a>.</p>
          </div>
        </div>
      </div>*/
    );
  }
});

module.exports = {
  HomeContent: HomeContent,
  MavrckContent: MavrckContent
}
