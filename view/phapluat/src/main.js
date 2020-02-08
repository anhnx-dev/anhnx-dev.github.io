// tab
var tab = $('.js-tab');

if (tab) {
  var tabButton = $('.js-tab .tab-item .tab-title');
  tabButton.click(function (event) {
    $(this).parent().addClass('active').siblings().removeClass("active");
  });
}

//-------------------------- Tweezer
class Tweezer {
  constructor(opts = {}) {
    this.duration = opts.duration || 1000;
    this.ease = opts.easing || this._defaultEase;
    this.start = opts.start;
    this.end = opts.end;

    this.frame = null;
    this.next = null;
    this.isRunning = false;
    this.events = {};
    this.direction = this.start < this.end ? 'up' : 'down';
  }

  begin() {
    if (!this.isRunning && this.next !== this.end) {
      this.frame = window.requestAnimationFrame(this._tick.bind(this));
    }
    return this;
  }

  stop() {
    window.cancelAnimationFrame(this.frame);
    this.isRunning = false;
    this.frame = null;
    this.timeStart = null;
    this.next = null;
    return this;
  }

  on(name, handler) {
    this.events[name] = this.events[name] || [];
    this.events[name].push(handler);
    return this;
  }

  emit(name, val) {
    let e = this.events[name];
    e && e.forEach(handler => handler.call(this, val));
  }

  _tick(currentTime) {
    this.isRunning = true;

    let lastTick = this.next || this.start;

    if (!this.timeStart) this.timeStart = currentTime;
    this.timeElapsed = currentTime - this.timeStart;
    this.next = Math.round(this.ease(this.timeElapsed, this.start, this.end - this.start, this.duration));

    if (this._shouldTick(lastTick)) {
      this.emit('tick', this.next);
      this.frame = window.requestAnimationFrame(this._tick.bind(this));
    } else {
      this.emit('tick', this.end);
      this.emit('done', null);
    }
  }

  _shouldTick(lastTick) {
    return {
      up: this.next < this.end && lastTick <= this.next,
      down: this.next > this.end && lastTick >= this.next
    } [this.direction];
  }

  _defaultEase(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * ((--t) * (t - 2) - 1) + b;
  }
}

//----------------------- Tweezer end;

const elements = document.querySelectorAll('[data-scroll]');

if (elements) {
  for (let i = 0; i < elements.length; i++) {

    const button = elements[i];
    const targetValues = elements[i].getAttribute('data-scroll');
    const targets = document.querySelectorAll(targetValues);
    if (targets) {
      for (let i = 0; i < targets.length; i++) {
        button.addEventListener('click', () => {
          const scrollTop = (window.scrollY || window.pageYOffset || document.documentElement.scrollTop);
          new Tweezer({
              start: scrollTop,
              end: targets[i].getBoundingClientRect().top + scrollTop,
            })
            .on('tick', v => window.scrollTo(0, v))
            .begin();
        });
      }
    } else {
      console.log('wrong id');
    }
  }
}

const tabs = document.querySelectorAll('[data-tab]');
if (tabs) {
  for (let i = 0; i < tabs.length; i++) {
    const button = tabs[i];
    const CLASS_ACTIVE = 'active';

    $(button).on('click', function () {
      $(this).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
      const item = button.getAttribute('data-tab');
      $(item).addClass(CLASS_ACTIVE).siblings().removeClass(CLASS_ACTIVE);
    });
  }
}

// Slider
const heroSlider = $('.js-hero-slider');
if (heroSlider) {
  const slider = heroSlider;
  slider.slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000
  });
}

const slider1 = $('.js-slider_1');
if (slider1) {
  const slider = slider1;
  slider.slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
}

const slider2 = $('.js-slider_2');
if (slider2) {
  const slider = slider2;
  slider.slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
}

const slider3 = $('.js-slider_3');
if (slider2) {
  const slider = slider3;
  slider.slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
}