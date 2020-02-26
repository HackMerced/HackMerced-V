import React, { Component } from "react";
import Swiper from "swiper";

import Logo from "../../component/HackM-Logo";
import "./live.scss";

class Live extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });

    return (
      <section id="live">
        <section id="live-logo">
          <Logo/>
        </section>
        <section id="live-timer"></section>
        <section id="live-twitter"></section>
        <section id="live-slack"></section>
        <section id="live-devpost"></section>
        <section id="live-container">
          <div class="blog-slider">
            <div class="blog-slider__wrp swiper-wrapper">
              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg" alt=""></img>
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                  <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>
              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg" alt=""></img>
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor2</div>
                  <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>

              <div class="blog-slider__item swiper-slide">
                <div class="blog-slider__img">
                  <img src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg" alt=""></img>
                </div>
                <div class="blog-slider__content">
                  <span class="blog-slider__code">26 December 2019</span>
                  <div class="blog-slider__title">Lorem Ipsum Dolor</div>
                  <div class="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
                  <a href="#" class="blog-slider__button">READ MORE</a>
                </div>
              </div>

            </div>
            <div class="blog-slider__pagination"></div>
          </div>
        </section>
      </section>
    )
  }
}

export default Live;
