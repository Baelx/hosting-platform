import MobileMenu from './modules/MobileMenu';
import AnimateOnScroll from './modules/AnimateOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
new AnimateOnScroll($(".feature-item"), "85%", "fadeInShrink");
new AnimateOnScroll($(".testimonial"), "60%", "fadeInShrink");
new AnimateOnScroll($(".includes"), "85%", "fadeInShrink");
new AnimateOnScroll($(".price"), "75%", "slideInRight");
const modal = new Modal();
