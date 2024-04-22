const body = document.querySelector('body');

// Call To Action
const arrow = document.querySelector(".headerCTA");
const timeline = gsap.timeline({repeat: -1});
timeline.to(arrow, { y: "2vh", duration: 0.5});
timeline.to(arrow, { y: 0, duration: 1, ease:"none"});

//Spritesheet
const spritesheetContainer = document.querySelector('.spritesheetBG');
const sprite = document.querySelectorAll('.spritesheet');

if (spritesheetContainer != null) {
    window.addEventListener('scroll', () => {
        let y = window.scrollY;
        body.classList.add('is-scrolling');
        setTimeout(noScrollingBody, 100);
      });
      
      function noScrollingBody() {
          body.classList.remove('is-scrolling');
      }
}