import React from 'react';
import Deck from 'react-slide-deck';
import Contents from './Content.jsx';
var Content = Contents.Content;
var MobileDetect = require('mobile-detect');

var MediaDeck = React.createClass({
  getInitialState: function() {
    return {current: 0, vertical: true, swipe: true, wheel: true, animate: true, factor: 0.3, loop: false, index: 0};
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

    var md = new MobileDetect(window.navigator.userAgent);
    var isMobile = md.mobile();
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
    var languages1 = ['AngularJS', 'Node.js', 'HTML5', 'CSS3'];
    var languages2 = ['React'];
    var languages3 = ['Java', 'OpenGL'];
    var languages4 = ['python']

    var socialEls = [];
    socialEls.push(social.map(function(s) {
      return <a href={s.url} target='_blank'><i className={s.icon}></i></a>
    }));

    socialEls.push(languages1.map(function(s) {
      return <span className='bold m-10-10-10-0'>{s}</span>
    }));

    socialEls.push(languages2.map(function(s) {
      return <span className='bold m-10-10-10-0'>{s}</span>
    }));

    socialEls.push(languages3.map(function(s) {
      return <span className='bold m-10-10-10-0'>{s}</span>
    }));

    var main = {
          src: {
            src: ['app/images/yulia_3.jpg'],
            className: ''
          },
          label: 'hello i am',
          header: ['Yulia', <br></br>, 'Web Developer'],
          description: ['Experience in web development focusing on user interaction and user experience. Currently working as a full stack developer at ', <a href='http://mavrck.co' target='_blank'>Mavrck</a>, '.'],
          links: socialEls[0],
          resume: 'app/images/Resume.pdf'
        };
    var mavrck = {
          src: {
            src: ['app/images/mavrck_2.png', 'app/images/mavrck_1.png'],
            className: 'image-wrap'
          },
          label: 'project 01',
          header: ['Mavrck\'s', <br></br>, 'Influencer Program'],
          description: 'Worked on front-end and back-end implementation of the platform for the brand\'s influencers, as well as its design.',
          links: socialEls[1],
        };
    var tap = {
          src: {
            src: ['app/images/tap.jpg'],
            className: ''
          },
          label: 'project 02',
          header: ['What\'s on tap?'],
          description: 'A small project to show what\'s on tap at Mavrck.',
          url: 'http://zileeva.github.io/#/mavrck?beer1=Kriek%20Lambic&beer2=Cidre%20Ruwet&_k=5a9yqj',
          links: socialEls[2],
        };
    var raytracer = {
          src: {
            src: ['app/images/raytracer/raytrace.png', 'app/images/raytracer/chess.png'],
            className: 'image-wrap w-300'
          },
          label: 'project 03',
          header: ['Raytracer'],
          description: 'Raytracer program that generates the images by tracing the path of light through pixels in an image. Supports box, sphere, cylinder, and cone shapes, phong shading, textures, shadows, reflections, and refractions.',
          url: 'https://github.com/zileeva/raytracer',
          links: socialEls[3],
          final: true
        };
    var contents = [ main, mavrck, tap, raytracer ];

    var slides = contents.map(function (section, index) {
        return <Deck.Slide key={index}><Content section={section} isMobile={isMobile}/></Deck.Slide>
    });

    return (
      <div className="content-wrap">
        <Deck {...this.state} onSwitching={this.onSwitching} onSwitchDone={this.onSwitchDone} dura={1000} >
          {slides}
        </Deck>
        <ul className="indicators-wrap" onClick={this.handleClick}>
          <li className={this.state.current === 0 ? 'current' : ''}></li>
          <li className={this.state.current === 1 ? 'current' : ''}></li>
          <li className={this.state.current === 2 ? 'current' : ''}></li>
          <li className={this.state.current === 3 ? 'current' : ''}></li>

        </ul>
      </div>
    );
  }
});


export default MediaDeck;

