gsap.timeline({})
.from('#profile h3', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#profile .profile .text > p:nth-of-type(1)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#profile .profile .text > p:nth-of-type(2)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#profile .introduction', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})