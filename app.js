//HEADER SLIDES
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

const timeline = new TimelineMax();

timeline
  .fromTo(h1, 1.3, { opacity: 0, y: -150 }, { opacity: 1, y: 0 }, '-=0')
  .fromTo(h2, 1.3, { opacity: 0, y: -150 }, { opacity: 1, y: 0 }, '-=.8');

//PARALLAX BLOCKS
function parallaxY(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

function parallaxX(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateX(${distance * speed}px)`;
}

window.addEventListener('scroll', function () {
  parallaxY('.block--1', window.scrollY, 0.2);
  parallaxY('.block--2', window.scrollY, 0.58);
  parallaxY('.block--3', window.scrollY, 0.75);
  parallaxY('.block--4', window.scrollY, 0.68);
  parallaxY('.block--5', window.scrollY, 0.78);
  parallaxY('.block--6', window.scrollY, 0.34);
  parallaxY('.block--7', window.scrollY, 0.23);
  parallaxY('.block--8', window.scrollY, 0.65);
  parallaxY('.block--9', window.scrollY, 0.55);
  parallaxY('.block--10', window.scrollY, 0.32);
  parallaxY('.block--11', window.scrollY, 0.37);
  parallaxY('.block--12', window.scrollY, 0.78);
  parallaxY('.block--13', window.scrollY, 0.83);
  parallaxY('.block--14', window.scrollY, 0.75);
  parallaxX('.hr--projects', window.scrollY, 0.2);
  parallaxX('.hr--about', window.scrollY, 0.25);
  parallaxX('.hr--contact', window.scrollY, 0.12);
});

//TEXT MARQUEE
$('.about__marquee--text').marquee({
  duration: 9000,
  gap: 30,
  direction: 'left',
  duplicated: true,
});
