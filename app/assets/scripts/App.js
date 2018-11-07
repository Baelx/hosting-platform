import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';
import $ from 'jquery';

const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
new RevealOnScroll($(".package"), "75%");
const modal = new Modal();
