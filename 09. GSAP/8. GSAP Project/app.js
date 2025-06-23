var tl = gsap.timeline({
  defaults: {
     opacity: 0,
     ease: "linear",
     duration: 1,
  }
});

tl.fromTo(".navbar",{height: 0}, {
  opacity: 1,
  height: "150px",
  ease: "bounce",
});

tl.fromTo(".sidebar", {width: 0}, {
  opacity:1,
  width: "30%"
});

tl.fromTo(".main-img",{x: 0}, {
  opacity: 1
});

tl.fromTo(".content",{x:100},{
  opacity: 1,
  x: 0
});

