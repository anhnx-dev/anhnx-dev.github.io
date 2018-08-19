// Hero
const banner = document.querySelector('.hero__banner');
// const bannerImage = document.querySelector('.hero__banner img');
const ACTIVE_ANIMATION_CLASS = 'active-animetion';
window.addEventListener('load', () => {
  banner.classList.add(ACTIVE_ANIMATION_CLASS);
});

// Navbar
const navbar = document.querySelector('.js-navbar');
const DROPDOWN_CLASS = 'dropdown';
const ACTIVE_DROPDOWN_CLASS = 'dropdown-active';
const SUB_MENU_CLASS = 'sub-menu';
const submenus = document.querySelectorAll('.js-navbar>ul li ul');

if (navbar) {
  for (let i = 0; i < submenus.length; i++) {
    const submenu = submenus[i];
    submenu.parentNode.classList.add(DROPDOWN_CLASS);
    submenu.classList.add(SUB_MENU_CLASS);
  }
  const dropdownButtons = document.querySelectorAll('.dropdown>a');
  for (let i = 0; i < dropdownButtons.length; i++) {
    const dropdownButton = dropdownButtons[i];
    dropdownButton.removeAttribute('href');
    dropdownButton.addEventListener('click', () => {
      dropdownButton.parentNode.classList.toggle(ACTIVE_DROPDOWN_CLASS);
    });
    // return false;
  }
}


// Menu Mobile
const navTrigger = document.querySelector('.js-trigger');
const slideoutOvarlay = document.querySelector('.js-slideout-overlay');
const FIXED_CLASS = 'fixed-top';
const body = document.body;

if (navTrigger) {
  navTrigger.addEventListener('click', () => {
    body.classList.toggle(FIXED_CLASS)
  });
  slideoutOvarlay.addEventListener('click', () => {
    body.classList.remove(FIXED_CLASS)
  })
}

// accordion
const ITEM_CLASS = 'js-accordion';
const ACTIVE_CLASS = 'accordion-active';
const HEADER_ITEM_CLASS = 'js-accordion-header';
const BODY_ITEM_CLASS = 'js-accordion-body';
const BODY_WRAPPER_CLASS = 'js-accordion-body-inner';

const addClass = (item) => item.classList.add(ACTIVE_CLASS);
const removeClass = (item) => item.classList.remove(ACTIVE_CLASS);
const hideContent = (content) => content.style.height = 0;
const isActivated = (content, contentWarpper) => content.style.height = (contentWarpper.offsetHeight) + 'px';

const accordion = () => {
  const items = document.getElementsByClassName(ITEM_CLASS);
  const buttons = document.getElementsByClassName(HEADER_ITEM_CLASS);
  const contents = document.getElementsByClassName(BODY_ITEM_CLASS);
  const contentsWarpper = document.getElementsByClassName(BODY_WRAPPER_CLASS);
  if (items) {
    for (let i = 0; i < items.length; i++) {
      buttons[i].addEventListener('click', () => {
        if (items[i].classList[2] == ACTIVE_CLASS) {
          removeClass(items[i]);
          hideContent(contents[i]);
        } else {
          for (let i = 0; i < buttons.length; i++) {
            removeClass(items[i]);
            hideContent(contents[i]);
          }
          addClass(items[i]);
          isActivated(
            contents[i],
            contentsWarpper[i]
          );
        }
      });
    }
  }
};
accordion();