/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
   const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Back to top button
   */
   let backtotop = select('.back-to-top')
   if (backtotop) {
     const toggleBacktotop = () => {
       if (window.scrollY > 100) {
         backtotop.classList.add('active')
       } else {
         backtotop.classList.remove('active')
       }
     }
     window.addEventListener('load', toggleBacktotop)
     onscroll(document, toggleBacktotop)
   }

  /**
   * Preloader
   */
 let preloader = select('#preloader');
 if (preloader) {
   window.addEventListener('load', () => {
     preloader.remove()
   });
 }

 let navbar = select('.navbar');
 document.addEventListener('scroll', function (){
  let y = window.pageYOffset;
  navbar.classList.remove("defaultNavbar");
  // navbar.classList.add("fixed-top");
  navbar.classList.add("scrollNavbar");
	
	if (y == 0) {
    // navbar.classList.remove("fixed-top");
		navbar.classList.remove("scrollNavbar");
    navbar.classList.add("defaultNavbar");
	}
 });

 let toggler = select('.navbar-toggler');
 let header = select('#header');
 toggler.addEventListener('click', () => {
  header.classList.toggle('rwdHeight');
});


document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      trigger: '[data-scroll]',
      offset: -100,
      easing: 'linear',
    });
  },
  false,
);

  AOS.init();

   /**
   * Swiper slider
   */
  var swiper = new Swiper(".mySwiper", {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    autoplay: {
      delay:  4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
