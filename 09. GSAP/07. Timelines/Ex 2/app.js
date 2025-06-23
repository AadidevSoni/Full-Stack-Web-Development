let tl = gsap.timeline({
  default: {
    duration: 1
  }
}).to("h1", {
  y: -100,
  color: "white"
}).to(".box1", {
  x: -100,
  backgroundColor: "yellow"
}).to(".box2", {
  y: 100,
  backgroundColor: "orange",
}).to(".box3", {
  x: 100,
  backgroundColor: "red"
});