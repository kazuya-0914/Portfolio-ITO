gsap.timeline({})
.from('#art h3', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#art figcaption figure:nth-of-type(1), #art figcaption figure:nth-of-type(2)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#art figcaption figure:nth-of-type(3), #art figcaption figure:nth-of-type(4)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#art figcaption figure:nth-of-type(5), #art figcaption figure:nth-of-type(6)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})

gsap.timeline({
  scrollTrigger: {
    trigger: '#art',
    start: 'center center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
.from('#art figcaption figure:nth-of-type(7), #art figcaption figure:nth-of-type(8)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#art figcaption figure:nth-of-type(9), #art figcaption figure:nth-of-type(10)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})