
  /**
* Template Name: PhotoFolio
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



(function () {
    "use strict";
  
    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector('body');
      const selectHeader = document.querySelector('#header');
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
    }
  
    document.addEventListener('scroll', toggleScrolled);
    window.addEventListener('load', toggleScrolled);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  
    function mobileNavToogle() {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
          mobileNavToogle();
        }
      });
  
    });
  
    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
      navmenu.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentNode.classList.toggle('active');
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
        e.stopImmediatePropagation();
      });
    });
    // Function to generate gallery items natur
function generateGalleryItemsrandom(totalImagesrandom) {
    const container = document.getElementById('random-container');
    
    for (let i = 1; i < totalImagesrandom; i++) {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-xl-4 col-lg-4 col-md-6 ';
        
        const galleryItemDiv = document.createElement('div');
        galleryItemDiv.className = 'gallery-item h-100';
        
        const img = document.createElement('img');
        img.src = `r/${i}.jpg`;
        img.className = 'img-fluid';
        img.alt = `Gallery ${i + 1}`;
        
        const galleryLinksDiv = document.createElement('div');
        galleryLinksDiv.className = 'gallery-links d-flex align-items-center justify-content-center';
        
        const previewLink = document.createElement('a');
        previewLink.href = `r/${i}.jpg`;
        previewLink.title = `Gallery ${i + 1}`;
        previewLink.className = 'glightbox preview-link';
        previewLink.innerHTML = '<i class="bi bi-arrows-angle-expand"></i>';
        
        const detailsLink = document.createElement('a');
        detailsLink.href = 'random.html';
        detailsLink.className = 'details-link';
        detailsLink.innerHTML = '<i class="bi bi-link-45deg"></i>';
        
        galleryLinksDiv.appendChild(previewLink);
        galleryLinksDiv.appendChild(detailsLink);
        
        galleryItemDiv.appendChild(img);
        galleryItemDiv.appendChild(galleryLinksDiv);
        
        colDiv.appendChild(galleryItemDiv);
        
        container.appendChild(colDiv);
    }
  }
  
  // Generate 100 gallery items
  generateGalleryItemsrandom(18);
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          preloader.classList.add('loaded');
        }, 1000);
        setTimeout(() => {
          preloader.remove();
        }, 2000);
      });
    }
  
    /**
     * Scroll top button
     */
    let scrollTop = document.querySelector('.scroll-top');
  
    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
    }
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  
    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', aosInit);
  
  
  
    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Init swiper sliders
     */
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );
  
        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }
  
    window.addEventListener("load", initSwiper);
  
    /**
   * Initialize the hero carousel
   */
    const heroCarousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
      interval: 5000, // Change the slide every 5 seconds
      ride: 'carousel'
    });
  
  })();