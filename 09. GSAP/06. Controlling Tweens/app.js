let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

gsap.set(".box1", {
  backgroundColor: "yellow",
});

let tween = gsap.to(".box1", {
  y: -200,
  duration: 4,
  backgroundColor: "green",
});

play.addEventListener("click", () => {
  tween.play()
});
pause.addEventListener("click", () => {
  tween.pause()
});
restart.addEventListener("click", () => {
  tween.restart()
});