import React from 'react';
import Deck from 'react-slide-deck';
import Contents from './Content.jsx';
var Content = Contents.Content;

var MediaDeck = React.createClass({
  getInitialState: function() {
    return {current: 0, vertical: true, swipe: true, wheel: true, animate: true, factor: 0.3, loop: true, index: 0};
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
    var languages2 = ['Java', 'OpenGL'];

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

    var contents = [
        {
          src: 'app/images/yulia_3.jpg',
          label: 'hello i am',
          header: ['Yulia', <br></br>, 'Web Developer'],
          description: ['Experience in web development focusing on user interaction and user experience. Currently working as a full stack developer at ', <a href='http://mavrck.co' target='_blank'>Mavrck</a>, '.'],
          links: socialEls[0]
        },
        {
          src: 'app/images/long_home.png',
          label: 'project 01',
          header: ['Mavrck\'s', <br></br>, 'Influencer Program'],
          description: 'Worked on front-end and back-end implementation of the platform for the brand\'s influencers, as well as its design.',
          links: socialEls[1]
        },
        {
          src: 'app/images/raytracer.png',
          label: 'project 02',
          header: ['Raytracer'],
          description: 'Raytracer program that generates the images by tracing the path of light through pixels in an image. Supports box, sphere, cylinder, and cone shapes, phong shading, textures, shadows, reflections, and refractions.',
          links: socialEls[2]
        }
    ];

    var slides = contents.map(function (section, index) {
      return <Deck.Slide key={index}><Content section={section} /></Deck.Slide>
    });

    return (
      <div className="content-wrap">
        <Deck {...this.state} onSwitching={this.onSwitching} onSwitchDone={this.onSwitchDone}>
          {slides}
        </Deck>
        <ul className="indicators-wrap" onClick={this.handleClick}>
          <li className={this.state.current === 0 ? 'current' : ''}></li>
          <li className={this.state.current === 1 ? 'current' : ''}></li>
          <li className={this.state.current === 2 ? 'current' : ''}></li>
        </ul>
      </div>
    );
  }
});


export default MediaDeck;

