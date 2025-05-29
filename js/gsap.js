// === ヘッダー（共通）=== //
gsap.from('header', {
  y: -100,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: 'header',
    start: 'top top',
    toggleActions: 'play none none none',
    markers: false,
  },
});

// === メインビジュアル === //
gsap.from('#main-visual', {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: 'header',
    start: 'top top',
    toggleActions: 'play none none none',
    markers: false,
  },
});

// === ディスクリプション === //
// テキスト + ドット + 四角
gsap.timeline({
  scrollTrigger: {
    trigger: '#main-visual',
    start: '70% center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
.to('#description .description > p:nth-of-type(1)', {
  opacity: 1,
  duration: 0.5,
})
.to('#description .description > p:nth-of-type(2)', {
  opacity: 1,
  duration: 0.5,
})
.to('#description .description > p:nth-of-type(3)', {
  opacity: 1,
  duration: 0.5,
})
.from('#description .dots > div:nth-of-type(1)', {
  opacity: 0,
  duration: 0.5,
})
.from('#description .dots > div:nth-of-type(2)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.5,
})
.from('#description .dots > div:nth-of-type(3)', {
  opacity: 0,
  y: "-10rem",
  duration: 0.5,
})
.from('#description .square', {
  opacity: 0,
  x: "-50vw",
  rotation: 360,
  ease: "none",
  duration: 0.8,
})

// === プロフィール === //
gsap.timeline({
  scrollTrigger: {
    trigger: '#description',
    start: '70% center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
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
.from('#profile .profile .text > p:nth-of-type(3), #profile .profile .text > p:nth-of-type(4)', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})

// === スキル === //
gsap.timeline({
  scrollTrigger: {
    trigger: '#profile',
    start: 'bottom center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
.from('#skill h3', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#skill figcaption > div:nth-of-type(1) > div', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#skill figcaption > div:nth-of-type(2) > div', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})

gsap.timeline({
  scrollTrigger: {
    trigger: '#skill',
    start: '40% center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
.from('#skill h3', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#skill figcaption > div:nth-of-type(3) > div', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})
.from('#skill figcaption > div:nth-of-type(4) > div', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})

// === ワーク === //
gsap.timeline({
  scrollTrigger: {
    trigger: '#skill',
    start: '80% center',
    toggleActions: 'play none none none',
    markers: false,
  },
})
.from('#work h3', {
  opacity: 0,
  y: "-5rem",
  duration: 0.8,
})