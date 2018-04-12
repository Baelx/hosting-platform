import $ from 'jquery';

class MobileMenu {
  constructor() {
    $(".site-header__menu-icon").click(function() {
        console.log("clicked");
});
  }
}

export default MobileMenu;
