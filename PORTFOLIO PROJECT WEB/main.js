const line = document.querySelector('.line');
const nextLine = document.querySelector('.next_line');

function isInView(element) {
    const bounding = element.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function onScroll() {
    const images = document.querySelectorAll('.fade-in-image');
    line.classList.add('animate')
    nextLine.classList.add('animate')
    images.forEach(image => {
      if (isInView(image)) {
        image.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);

  const slideshowPosters = document.querySelector('.slideshow_posters');
      const imagesPosters = ['../PORTFOLIO PROJECT WEB/resources/images/child labour poster.jpg', '../PORTFOLIO PROJECT WEB/resources/images/longhornbbq-poster_1 (2).jpg'];
      let currentIndex = 0;

      setInterval(() => {
        slideshowPosters.src = imagesPosters[currentIndex];
        currentIndex = (currentIndex + 1) % imagesPosters.length;
      }, 2000);

      const slideshowLogos = document.querySelector('.slideshow_logos');
      const imagesLogos = ['../PORTFOLIO PROJECT WEB/resources/images/child labour logo.png', '../PORTFOLIO PROJECT WEB/resources/images/longhornbbqlogojpg.jpg'];
      let currentIndexLogos = 0;

      setInterval(() => {
        slideshowLogos.src = imagesLogos[currentIndexLogos];
        currentIndexLogos = (currentIndexLogos + 1) % imagesLogos.length;
      }, 2000);

      document.getElementById("download-pdf-btn").href = "/resources/cv/portfolio-cv.pdf";

      const slideshowWebsite = document.querySelector('.website_img');
      const imagesWebsite = ['../PORTFOLIO PROJECT WEB/resources/images/website2.png', '../PORTFOLIO PROJECT WEB/resources/images/website3.png' ,
     '../PORTFOLIO PROJECT WEB/resources/images/website4.png', '../PORTFOLIO PROJECT WEB/resources/images/website5.png', '../PORTFOLIO PROJECT WEB/resources/images/website6.png', 
      '../PORTFOLIO PROJECT WEB/resources/images/website.png'];
      let currentIndexWebsite = 0;

      setInterval(() => {
        slideshowWebsite.src = imagesWebsite[currentIndexWebsite];
        currentIndexWebsite = (currentIndexWebsite + 1) % imagesWebsite.length;
      }, 2000);