export class SmoothScroll {
  constructor(selector, offsetVar, duration) {
    this.links = document.querySelectorAll(selector);
    this.offsetVar = offsetVar;
    this.duration = duration;
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', (event) => {
        this.handleClick(event);
      });
    });
  }

  handleClick(event) {
    const targetId = event.currentTarget.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      const offsetTop = parseInt(getComputedStyle(document.documentElement).getPropertyValue(this.offsetVar));
      this.scrollTo(target, offsetTop);
      this.removeClasses();
    }
  }

  scrollTo(target, offsetTop) {
    const start = window.pageYOffset;
    const end = target.offsetTop - offsetTop;
    const change = end - start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = () => {
      currentTime += increment;
      const val = this.easeInOutQuad(currentTime, start, change, this.duration);
      window.scrollTo(0, val);
      if (currentTime < this.duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  }

  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  removeClasses() {
    document.body.classList.remove('is-menu-opened');
    const dropdown = document.querySelector('.header__dropdown');
    const toggle = document.querySelector('.header__toggle');
    if (dropdown) dropdown.classList.remove('is-show');
    if (toggle) toggle.classList.remove('is-active');
  }
}
