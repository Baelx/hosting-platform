import MobileMenu from './modules/MobileMenu';
import AnimateOnScroll from './modules/AnimateOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
new AnimateOnScroll($(".feature-item"), "85%", "fadeInShrink");
new AnimateOnScroll($(".testimonial-1"), "250%", "slideInBottom");
new AnimateOnScroll($(".testimonial-2"), "225%", "slideInBottom");
new AnimateOnScroll($(".testimonial-3"), "200%", "slideInBottom");
new AnimateOnScroll($(".price"), "75%", "slideInRight");
new AnimateOnScroll($(".includes"), "85%", "fadeInShrink");
const modal = new Modal();
