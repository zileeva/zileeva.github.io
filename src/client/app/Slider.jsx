import React from 'react';
import Slider from 'react-slick';

var MediaSlider = React.createClass({
  render: function () {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />
    };
    return (
      <Slider {...settings} className='slider'>
        <img src='app/images/home.png' />
        <img src='app/images/rew.png' />
        <img src='app/images/news.png' />
        <img src='app/images/act.png' />
      </Slider>
    );
  }
});

var PrevArrow = React.createClass({
  render: function () {
    return (
      <button {...this.props} className='slick-arrow'>
        <i className='ion-ios-arrow-thin-left'></i>
      </button>
    );
  }
});

var NextArrow = React.createClass({
  render: function () {
    return (
      <button {...this.props} className='slick-arrow'>
        <i className='ion-ios-arrow-thin-right'></i>
      </button>
    );
  }
});

export default MediaSlider;