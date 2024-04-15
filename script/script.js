const arrow = document.querySelector(".headerCTA");
const timeline = gsap.timeline({repeat: -1});
timeline.to(arrow, { y: "2vh", duration: 0.5});
timeline.to(arrow, { y: 0, duration: 1, ease:"none"});