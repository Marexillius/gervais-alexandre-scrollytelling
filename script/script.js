const body = document.querySelector('body');
gsap.registerPlugin(ScrollTrigger, TextPlugin, MotionPathPlugin, MorphSVGPlugin);

// Call To Action
const arrow = document.querySelector(".headerCTA");
const timeline = gsap.timeline({ repeat: -1 });
timeline.to(arrow, { y: "2vh", duration: 0.5 });
timeline.to(arrow, { y: 0, duration: 1, ease: "none"});

// ---------------Chapitre 1---------------
const timelineCh1 = gsap.timeline({});
timelineCh1.to(".persoDefaut", {right: "5vw", ease: "power1.out", duration: 5, rotate: 1080});
timelineCh1.to(".st-ch1", {text: "Hmm? Qu'est-ce ceci?", ease: "power2.out", duration: 2}, "<");

// ---------------Chapitre 2---------------
const timelineCh2 = gsap.timeline({});
timelineCh2.to(".persoTombe", {bottom: "15vh", ease: "power1.in", rotate: "-40deg", duration: 7});
timelineCh2.to(".horloge-paralax", {bottom: "130vh", duration: 2, ease: "none", rotate: "-20deg"}, "<");
timelineCh2.to(".paralax-0", {bottom: "-50vh", ease: "none", rotate: "-40deg", duration: 2}, "-=5");
timelineCh2.to(".paralax-1", {bottom: "-50vh", ease: "none", rotate: "-55deg", duration: 3}, "<");
timelineCh2.to(".paralax-2", {bottom: "-50vh", ease: "none", rotate: "20deg", duration: 4}, "<");
timelineCh2.to(".paralax-3", {bottom: "-50vh", ease: "none", rotate: "30deg", duration: 5}, "<");
timelineCh2.to(".calendrier", {bottom: "-40vh", ease: "none", duration: 5, rotate: "20deg"}, "-=7");

// ---------------Chapitre 3---------------
const timelineCh3 = gsap.timeline({});
timelineCh3.to(".persoJungle", {top: "53vh", left: "61vw", rotate: "35deg",});
timelineCh3.to(".persoJungle", {backgroundImage: "url('../img/img-personnage/perso-ace-cote-2.png')", rotate: "0deg", top: "65vh", duration: 0});
timelineCh3.to(".path-a", {morphSVG: ".path-e"}, "+=0.5");
timelineCh3.to(".persoJungle", {top: "20vh", left: "100vw", rotate: "40deg"}, "-=0.45");
timelineCh3.to(".persoJungle", {backgroundImage: "url('../img/img-personnage/perso-ace-cote-3.png')", duration: 0}, "<")

// ---------------Chapitre 4---------------
const timelineCh4 = gsap.timeline({});
timelineCh4.to(".persoPeur", {left: "-20vw", duration: 10, ease: "none", rotate: -1440});
timelineCh4.to(".ghost", {left: "-30vw", ease: "power1.out", top: "30vh", opacity: 0.8, duration: 13}, "-=5");
timelineCh4.to(".st-ch4", {text: "Pourquoi ai-je des frissons?!", duration: 4, ease: "power1.out"}, "-=16");

// ---------------Chapitre 5---------------
const timelineCh5 = gsap.timeline({});
timelineCh5.to(".persoVolcan", {ease: "power1.in", bottom: "13vh", right: "8vw"});
timelineCh5.to(".persoVolcan", {ease: "none", bottom: "10vh", left: "80vw", rotate:"-20deg", duration: 0.1});
timelineCh5.to(".persoVolcan", {ease: "none", bottom: "-5vh", left: "-20vw", rotate: "-1080deg", width: "6.5vw", duration: 2});
timelineCh5.to(".overlay-volcan", {ease: "power1.inOut", right: "-4vw", width: "110vw", duration: 2.6}, "-=2.6");
timelineCh5.fromTo(".chapter-5", {backgroundSize: "110% 110%"}, {backgroundSize: "100% 100%", ease: "power1.inOut", duration: 2.6}, "<");
timelineCh5.to(".ss-05", {height: "10vw", right: "6vw", top: "8vh", ease: "power1.inOut", duration: 2.6}, "<");
timelineCh5.to(".st-ch5", {text: "Quelle belle île!", duration: 2, ease: "power1.out"}, "-=2.6");

// ---------------Chapitre 6---------------
const timelineCh6 = gsap.timeline({});
timelineCh6.to(".ghost-end", {top: "10vh", duration: 7, ease: "power1.out", opacity: 0.8, right: "25vw"});

//Spritesheet
window.addEventListener('scroll', () => {
    body.classList.add('is-scrolling');
    setTimeout(noScrollingBody, 100);
});

function noScrollingBody() {
    body.classList.remove('is-scrolling');
}
